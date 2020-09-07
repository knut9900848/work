<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Quotation;
use App\User;
use App\Http\Resources\QuotationPdf as QuotationPdfResource;
use App\Model\QuotationPdfDocument;
use Auth;
use PDF;
use Carbon\Carbon;
use Storage;
use Notification;
use App\Notifications\QuotationSubmitted;
use App\Notifications\QuotationApproved;
use App\Notifications\QuotationRejected;

class QuotationPdfDocumentController extends Controller
{
    public function __construct()
    { }

    public function index($quotation_id)
    {
        $quotation = Quotation::findOrFail($quotation_id);
        $pdfDocuments = $quotation->quotation_pdf_documents;

        if (!empty($pdfDocuments)) {
            return response()->json([
                "pdfDocuments" => QuotationPdfResource::collection($pdfDocuments),
            ]);
        };
    }

    public function store(Request $request, $quotation_id)
    {

        $quotation = Quotation::findOrFail($quotation_id);
        $option = $quotation->quotation_option;
        $existPdfDocumentFiles = $quotation->quotation_pdf_documents;

        $newPdfDocumentFile = new QuotationPdfDocument;

        // 기존에 생성된 파일이 없다면 버전을 1로 세팅해 준다.
        if ($existPdfDocumentFiles->count() === 0) {
            $newPdfDocumentFile->version = 0;
            // 고객으로 부터 거부된 QT는 재 생성시 버전을 +1 한다.
        } elseif ($existPdfDocumentFiles->last()->quotation_processes->last()->name === "DENIED") {
            $newPdfDocumentFile->version = $existPdfDocumentFiles->last()->version + 1;
            // 그렇지 않을경우 버전 업이 필요 없음으로 이전 버전을 사용한다.
        } else {
            $newPdfDocumentFile->version = $existPdfDocumentFiles->last()->version;
        }

        // PDF DB에 입력한다.
        $version = $newPdfDocumentFile->version;

        $newPdfDocumentFile->origin_name = $quotation->number;
        $newPdfDocumentFile->name =  Carbon::now()->timestamp;
        $newPdfDocumentFile->extension = "pdf";
        $newPdfDocumentFile->user_id = Auth::user()->id;
        $newPdfDocumentFile->quotation_id = $quotation->id;
        $newPdfDocumentFile->save();

        // Process를 입력한다.
        $process = saveQuotationProcess('Draft', $newPdfDocumentFile->id);

        // Dynamic field의 숫에따라 Header의 크기를 조정한다.
        $extraFieldCount = $quotation->fields->count();
        $marginTop = ($extraFieldCount * 5.6) + 105;

        switch ($option->pdf_form_type) {
            default:
                $viewPath = 'pdfs/quotations/default';
                $marginBottom = "8mm";
                break;
        }

        $headerHtml = view()->make($viewPath . ".header", compact('quotation', 'version'))->render();
        $footerHtml = view()->make($viewPath . ".footer", compact('quotation'))->render();

        $generatePdf = PDF::loadView($viewPath . ".main", compact('quotation', 'option', 'process'))
            ->setOption('margin-top', $marginTop)
            ->setOption('margin-bottom', $marginBottom)
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            ->setOption('footer-font-size', 8);

        $generatedPdfFile = Storage::disk('quotation_pdfs')->path($newPdfDocumentFile->name);
        $generatePdf->save($generatedPdfFile);

        // 첨부 파일이 존재한다면 생성된 PDF와 병합한다.
        if ($quotation->attachments) {
            // 첨부파일 저장 폴더 경로 설정
            $attachmentFileStoragePath  = Storage::disk('quotation_attachments')->path('');
            // PDF와 첨부파일을 병합
            $mergedFile = mergePdf($generatedPdfFile, $quotation->attachments, $attachmentFileStoragePath);
            // 병합된 파일을 저장
            Storage::disk('quotation_pdfs')->put($newPdfDocumentFile->name, $mergedFile);
        }

        return response()->json([
            "pdf" => new QuotationPdfResource($newPdfDocumentFile),
            "result" => "success",
            "message" => "New PDF has generated successfully."
        ]);
    }

    public function update(Request $request, $quotation_id)
    {
        $quotation = Quotation::findOrFail($quotation_id);
        $option = $quotation->quotation_option;
        $existPdfDocumentFiles = $quotation->quotation_pdf_documents;

        // 서버에 저장된 파일명을 구한다.
        $existFileName = $existPdfDocumentFiles->last()->name;
        $version = $existPdfDocumentFiles->last()->version;
        $process = "Draft";

        // Dynamic field의 숫에따라 Header의 크기를 조정한다.
        $extraFieldCount = $quotation->fields->count();
        $marginTop = ($extraFieldCount * 5.6) + 105;

        switch ($option->pdf_form_type) {
            default:
                $viewPath = 'pdfs/quotations/default';
                $marginBottom = "8mm";
                break;
        }

        $headerHtml = view()->make($viewPath . ".header", compact('quotation', 'version'))->render();
        $footerHtml = view()->make($viewPath . ".footer", compact('quotation'))->render();

        $generatePdf = PDF::loadView($viewPath . ".main", compact('quotation', 'option', 'process'))
            ->setOption('margin-top', $marginTop)
            ->setOption('margin-bottom', $marginBottom)
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            ->setOption('footer-font-size', 8);

        // 기존 PDF 파일이 있으면 삭제를 한다.
        if (Storage::disk('quotation_pdfs')->exists($existFileName)) {
            Storage::disk('quotation_pdfs')->delete($existFileName);
        }

        // 업데이트된 정보를 가지고 Pdf 파일을 생성한다.
        $generatedPdfFile = Storage::disk('quotation_pdfs')->path($existFileName);
        $generatePdf->save($generatedPdfFile);

        // 첨부 파일이 존재한다면 생성된 PDF와 병합한다.
        if ($quotation->attachments) {
            // 첨부파일 저장 폴더 경로 설정
            $attachmentFileStoragePath  = Storage::disk('quotation_attachments')->path('');
            // PDF와 첨부파일을 병합
            $mergedFile = mergePdf($generatedPdfFile, $quotation->attachments, $attachmentFileStoragePath);
            // 병합된 파일을 저장
            Storage::disk('quotation_pdfs')->put($existFileName, $mergedFile);
        }

        return response()->json([
            "result" => "success",
            "message" => "PDF has updated successfully."
        ]);
    }

    public function download($quotation_id, $pdfDocument_id)
    {
        $pdf = QuotationPdfDocument::findOrFail($pdfDocument_id);
        $storagePath  = Storage::disk('quotation_pdfs')->path('');
        $file = $storagePath . $pdf->name;
        $fileExtension = $pdf->extension;
        $fileName = $pdf->origin_name;
        $mime_type = $pdf->mime_type;
        $headers = [
            'Content-Type' => $mime_type,
            'Content-Encoding' => 'UTF-8',
            'Content-Disposition' => 'attachment',
            'filename' => $fileName . "." . $fileExtension,
        ];

        return response()->download($file, $fileName, $headers);
    }

    public function changeStatus(Request $request, $quotation_id, $pdfDocument_id)
    {
        $quotation = Quotation::findOrFail($quotation_id);
        $option = $quotation->quotation_option;
        $pdfDocument = QuotationPdfDocument::findOrFail($pdfDocument_id);

        $totalPrice = $quotation->total_price;
        $exchangeRate = $quotation->currency->exchange_rate;
        $exchangedTotalPrice = $totalPrice * $exchangeRate;

        if ($request->process == "APPROVED" || $request->process === "REJECTED") {

            if (!auth()->user()->can('approve-quotation')) {
                if ($exchangedTotalPrice > 500000 || $quotation->is_emergency) {
                    $retrunData = array(
                        "status" => "error",
                        "message" => "You do not have permission"
                    );
                    return response()->json($retrunData, 403);
                }
            }
        }

        // PDF 파일을 재생성한다.
        if ($request->overwrite) {
            // 서버에 저장된 파일명을 구한다.
            $existFileName = $pdfDocument->name;
            $process = $request->process;
            $version = $pdfDocument->version;

            // Dynamic field의 숫에따라 Header의 크기를 조정한다.
            $extraFieldCount = $quotation->fields->count();
            $marginTop = ($extraFieldCount * 5.6) + 105;

            switch ($option->pdf_form_type) {
                default:
                    $viewPath = 'pdfs/quotations/default';
                    $marginBottom = "8mm";
                    break;
            }

            $headerHtml = view()->make($viewPath . ".header", compact('quotation', 'version'))->render();
            $footerHtml = view()->make($viewPath . ".footer", compact('quotation'))->render();

            $generatePdf = PDF::loadView($viewPath . ".main", compact('quotation', 'version', 'process'))
                ->setOption('margin-top', $marginTop)
                ->setOption('margin-bottom', $marginBottom)
                ->setOption('header-html', $headerHtml)
                ->setOption('footer-html', $footerHtml)
                ->setPaper('a4')
                ->setOption('footer-font-size', 8);

            // 기존 PDF 파일이 있으면 삭제를 한다.
            if (Storage::disk('quotation_pdfs')->exists($existFileName)) {
                Storage::disk('quotation_pdfs')->delete($existFileName);
            }

            $generatedPdfFile = Storage::disk('quotation_pdfs')->path($existFileName);
            $generatePdf->save($generatedPdfFile);

            // 첨부 파일이 존재한다면 생성된 PDF와 병합한다.
            if ($quotation->attachments) {
                // 첨부파일 저장 폴더 경로 설정
                $attachmentFileStoragePath  = Storage::disk('quotation_attachments')->path('');
                // PDF와 첨부파일을 병합
                $mergedFile = mergePdf($generatedPdfFile, $quotation->attachments, $attachmentFileStoragePath);
                // 병합된 파일을 저장
                Storage::disk('quotation_pdfs')->put($existFileName, $mergedFile);
            }

            if ($exchangedTotalPrice > 500000 || $quotation->is_emergency) {
                switch ($request->process) {
                    case 'APPROVED':
                        $lastProcess = $pdfDocument->quotation_processes->last();
                        $receiver = User::findOrFail($lastProcess->user_id);
                        $sender = Auth::user();
                        $receiver->notify(new QuotationApproved($quotation, $sender));
                        break;

                    case 'REJECTED':
                        $lastProcess = $pdfDocument->quotation_processes->last();
                        $receiver = User::findOrFail($lastProcess->user_id);
                        $sender = Auth::user();
                        $receiver->notify(new QuotationRejected($quotation, $sender));
                        break;

                    default:
                        # code...
                        break;
                }
            }

            // Quotation Status 변경
            $quotation->status = $request->status;
            $quotation->save();

            $process = saveQuotationProcess($request->process, $pdfDocument->id);
            updateList($quotation, 'quotation_list', $request->status);

            return response()->json([
                'status' => $request->status,
                "process" => $request->process,
                "message" => "PDF Status has changed to " . $request->process . " successfully.",
            ]);
        } else {

            // 현재 프로
            $process = saveQuotationProcess($request->process, $pdfDocument->id);

            // Send Mail
            if (($exchangedTotalPrice > 500000 || $quotation->is_emergency) && $request->process === "SUBMITTED") {
                $sender = Auth::user();
                $managers = User::permission('approve-quotation')->get();
                Notification::send($managers, new QuotationSubmitted($quotation, $sender));
            }

            $quotation->status = $request->status;
            $quotation->save();

            updateList($quotation, 'quotation_list', $request->status);

            return response()->json([
                'status' => $request->status,
                "process" => $request->process,
                "message" => "PDF Status has changed to " . $request->status . " successfully.",
            ]);
        }
    }
}
