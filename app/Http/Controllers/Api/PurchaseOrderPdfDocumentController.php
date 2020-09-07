<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\PurchaseOrderPdfDocument;
use App\Model\PurchaseOrder;
use App\Model\Admin\PurchaseOrderTermsAndConditions;
use App\User;
use App\Http\Resources\PurchaseOrderPdfDocument as PurchaseOrderPdfDocumentResource;
use Auth;
use PDF;
use iio\libmergepdf\Merger;
use Carbon\Carbon;
use Storage;
use Notification;
use App\Notifications\PurchaseOrderSubmitted;
use App\Notifications\PurchaseOrderApproved;
use App\Notifications\PurchaseOrderRejected;

class PurchaseOrderPdfDocumentController extends Controller
{
    public function __construct()
    { }

    public function index($purchaseOrder_id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($purchaseOrder_id);
        $pdfDocuments = $purchaseOrder->purchase_order_pdf_documents;

        if (!empty($pdfDocuments)) {
            return response()->json([
                "pdfDocuments" => PurchaseOrderPdfDocumentResource::collection($pdfDocuments),
            ]);
        };
    }

    public function store(Request $request, $purchase_order_id)
    {

        $purchaseOrder = PurchaseOrder::findOrFail($purchase_order_id);
        $option = $purchaseOrder->purchase_order_option;
        $existPdfDocumentFiles = $purchaseOrder->purchase_order_pdf_documents;

        $newPdfDocumentFile = new PurchaseOrderPdfDocument;

        // 기존에 생성된 파일이 없다면 버전을 1로 세팅해 준다.
        if ($existPdfDocumentFiles->count() === 0) {
            $newPdfDocumentFile->version = 0;
            // 고객으로 부터 거부된 QT는 재 생성시 버전을 +1 한다.
        } elseif ($existPdfDocumentFiles->last()->purchase_order_processes->last()->name === "DENIED") {
            $newPdfDocumentFile->version = $existPdfDocumentFiles->last()->version + 1;
            // 그렇지 않을경우 버전 업이 필요 없음으로 이전 버전을 사용한다.
        } else {
            $newPdfDocumentFile->version = $existPdfDocumentFiles->last()->version;
        }

        // PDF DB에 입력한다.
        $version = $newPdfDocumentFile->version;

        $newPdfDocumentFile->origin_name = $purchaseOrder->number;
        $newPdfDocumentFile->name =  Carbon::now()->timestamp;
        $newPdfDocumentFile->extension = "pdf";
        $newPdfDocumentFile->user_id = Auth::user()->id;
        $newPdfDocumentFile->purchase_order_id = $purchaseOrder->id;
        $newPdfDocumentFile->save();

        // Process를 입력한다.
        $process = savePurchaseOrderProcess('Draft', $newPdfDocumentFile->id);

        // Dynamic field의 숫에따라 Header의 크기를 조정한다.
        $extraFieldCount = $purchaseOrder->fields->count();
        $marginTop = ($extraFieldCount * 5.6) + 105;

        switch ($option->pdf_form_type) {
            default:
                $viewPath = 'pdfs/purchase_orders/default';
                $marginBottom = "8mm";
                break;
        }

        $headerHtml = view()->make($viewPath . ".header", compact('purchaseOrder', 'version'))->render();
        $footerHtml = view()->make($viewPath . ".footer", compact('purchaseOrder'))->render();

        $generatePdf = PDF::loadView($viewPath . ".main", compact('purchaseOrder', 'option', 'process'))
            ->setOption('margin-top', $marginTop)
            ->setOption('margin-bottom', $marginBottom)
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            ->setOption('footer-font-size', 8);

        // 파일명을 포함한 경로
        $generatedPdfFile = Storage::disk('purchase_order_pdfs')->path($newPdfDocumentFile->name);
        $generatePdf->save($generatedPdfFile);

        // Terms and Conditions가 존재한다면 PDF와 병합한다.
        if ($option->purchase_order_terms_and_conditions_id) {
            $termsAndConditions = PurchaseOrderTermsAndConditions::find($option->purchase_order_terms_and_conditions_id);
            // 첨부파일 저장 폴더 경로 설정
            $termsAndConditionsFile = Storage::disk('purchase_order_terms_and_conditions')->path($termsAndConditions->file_name);

            // PDF와 첨부파일을 병합
            $merger = new Merger;
            $merger->addIterator([$generatedPdfFile, $termsAndConditionsFile]);
            $createdPdf = $merger->merge();
            // 병합된 파일을 저장
            Storage::disk('purchase_order_pdfs')->put($newPdfDocumentFile->name, $createdPdf);
        }

        // 첨부 파일이 존재한다면 생성된 PDF와 병합한다.
        if ($purchaseOrder->attachments) {
            // 첨부파일 저장 폴더 경로 설정
            $attachmentFileStoragePath  = Storage::disk('purchase_order_attachments')->path('');
            // PDF와 첨부파일을 병합
            $mergedFile = mergePdf($generatedPdfFile, $purchaseOrder->attachments, $attachmentFileStoragePath);
            // 병합된 파일을 저장
            Storage::disk('purchase_order_pdfs')->put($newPdfDocumentFile->name, $mergedFile);
        }

        return response()->json([
            "pdfDocument" => new PurchaseOrderPdfDocumentResource($newPdfDocumentFile),
            "result" => "success",
            "message" => "New PDF has generated successfully."
        ]);
    }

    public function update(Request $request, $purchase_order_id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($purchase_order_id);
        $option = $purchaseOrder->purchase_order_option;
        $existPdfDocumentFiles = $purchaseOrder->purchase_order_pdf_documents;

        // 서버에 저장된 파일명을 구한다.
        $existFileName = $existPdfDocumentFiles->last()->name;
        $version = $existPdfDocumentFiles->last()->version;
        $process = "Draft";

        // Dynamic field의 숫에따라 Header의 크기를 조정한다.
        $extraFieldCount = $purchaseOrder->fields->count();
        $marginTop = ($extraFieldCount * 5.6) + 105;

        switch ($option->pdf_form_type) {
            default:
                $viewPath = 'pdfs/purchase_orders/default';
                $marginBottom = "8mm";
                break;
        }

        $headerHtml = view()->make($viewPath . ".header", compact('purchaseOrder', 'version'))->render();
        $footerHtml = view()->make($viewPath . ".footer", compact('purchaseOrder'))->render();

        $generatePdf = PDF::loadView($viewPath . ".main", compact('purchaseOrder', 'option', 'process'))
            ->setOption('margin-top', $marginTop)
            ->setOption('margin-bottom', $marginBottom)
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            ->setOption('footer-font-size', 8);

        // 기존 PDF 파일이 있으면 삭제를 한다.
        if (Storage::disk('purchase_order_pdfs')->exists($existFileName)) {
            Storage::disk('purchase_order_pdfs')->delete($existFileName);
        }

        $generatedPdfFile = Storage::disk('purchase_order_pdfs')->path($existFileName);
        $generatePdf->save($generatedPdfFile);

        // Terms and Conditions가 존재한다면 PDF와 병합한다.
        if ($option->purchase_order_terms_and_conditions_id) {
            $termsAndConditions = PurchaseOrderTermsAndConditions::find($option->purchase_order_terms_and_conditions_id);
            // 첨부파일 저장 폴더 경로 설정
            $termsAndConditionsFile = Storage::disk('purchase_order_terms_and_conditions')->path($termsAndConditions->file_name);

            // PDF와 첨부파일을 병합
            $merger = new Merger;
            $merger->addIterator([$generatedPdfFile, $termsAndConditionsFile]);
            $createdPdf = $merger->merge();
            // 병합된 파일을 저장
            Storage::disk('purchase_order_pdfs')->put($existFileName, $createdPdf);
        }

        // 첨부 파일이 존재한다면 생성된 PDF와 병합한다.
        if ($purchaseOrder->attachments) {
            // 첨부파일 저장 폴더 경로 설정
            $attachmentFileStoragePath  = Storage::disk('purchase_order_attachments')->path('');
            // PDF와 첨부파일을 병합
            $mergedFile = mergePdf($generatedPdfFile, $purchaseOrder->attachments, $attachmentFileStoragePath);
            // 병합된 파일을 저장
            Storage::disk('purchase_order_pdfs')->put($existFileName, $mergedFile);
        }

        return response()->json([
            "result" => "success",
            "message" => "PDF has updated successfully."
        ]);
    }

    public function download($purchase_order_id, $pdfDocument_id)
    {
        $pdf = PurchaseOrderPdfDocument::findOrFail($pdfDocument_id);
        $storagePath  = Storage::disk('purchase_order_pdfs')->path('');
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

    public function changeStatus(Request $request, $purchase_order_id, $pdfDocument_id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($purchase_order_id);
        $option = $purchaseOrder->purchase_order_option;
        $pdfDocument = PurchaseOrderPdfDocument::findOrFail($pdfDocument_id);

        $totalPrice = $purchaseOrder->total_price;
        $exchangeRate = $purchaseOrder->currency->exchange_rate;
        $exchangedTotalPrice = $totalPrice * $exchangeRate;

        if ($request->process == "APPROVED" || $request->process === "REJECTED") {

            if (!auth()->user()->can('approve-purchase-order')) {
                if ($exchangedTotalPrice > 500000 || $purchaseOrder->is_emergency) {
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

            // Table cell 병합설정
            $colspan = getColspan($option->is_use_discount, $option->is_use_tax);

            // Dynamic field의 숫에따라 Header의 크기를 조정한다.
            $extraFieldCount = $purchaseOrder->fields->count();
            $marginTop = ($extraFieldCount * 5.6) + 105;

            switch ($option->pdf_form_type) {
                default:
                    $viewPath = 'pdfs/purchase_orders/default';
                    $marginBottom = "8mm";
                    break;
            }

            $headerHtml = view()->make($viewPath . ".header", compact('purchaseOrder', 'version'))->render();
            $footerHtml = view()->make($viewPath . ".footer", compact('purchaseOrder'))->render();

            $generatePdf = PDF::loadView($viewPath . ".main", compact('purchaseOrder', 'option', 'process'))
                ->setOption('margin-top', $marginTop)
                ->setOption('margin-bottom', $marginBottom)
                ->setOption('header-html', $headerHtml)
                ->setOption('footer-html', $footerHtml)
                ->setPaper('a4')
                ->setOption('footer-font-size', 8);

            // 기존 PDF 파일이 있으면 삭제를 한다.
            if (Storage::disk('purchase_order_pdfs')->exists($existFileName)) {
                Storage::disk('purchase_order_pdfs')->delete($existFileName);
            }

            $generatedPdfFile = Storage::disk('purchase_order_pdfs')->path($existFileName);
            $generatePdf->save($generatedPdfFile);

            // Terms and Conditions가 존재한다면 PDF와 병합한다.
            if ($option->purchase_order_terms_and_conditions_id) {
                $termsAndConditions = PurchaseOrderTermsAndConditions::find($option->purchase_order_terms_and_conditions_id);
                // 첨부파일 저장 폴더 경로 설정
                $termsAndConditionsFile = Storage::disk('purchase_order_terms_and_conditions')->path($termsAndConditions->file_name);

                // PDF와 첨부파일을 병합
                $merger = new Merger;
                $merger->addIterator([$generatedPdfFile, $termsAndConditionsFile]);
                $createdPdf = $merger->merge();
                // 병합된 파일을 저장
                Storage::disk('purchase_order_pdfs')->put($existFileName, $createdPdf);
            }

            // 첨부 파일이 존재한다면 생성된 PDF와 병합한다.
            if ($purchaseOrder->attachments) {
                // 첨부파일 저장 폴더 경로 설정
                $attachmentFileStoragePath  = Storage::disk('purchase_order_attachments')->path('');
                // PDF와 첨부파일을 병합
                $mergedFile = mergePdf($generatedPdfFile, $purchaseOrder->attachments, $attachmentFileStoragePath);
                // 병합된 파일을 저장
                Storage::disk('purchase_order_pdfs')->put($existFileName, $mergedFile);
            }

            if ($exchangedTotalPrice > 500000 || $purchaseOrder->is_emergency) {
                switch ($request->process) {
                    case 'APPROVED':
                        $lastProcess = $pdfDocument->purchase_order_processes->last();
                        $receiver = User::findOrFail($lastProcess->user_id);
                        $sender = Auth::user();
                        $receiver->notify(new PurchaseOrderApproved($purchaseOrder, $sender));
                        break;

                    case 'REJECTED':
                        $lastProcess = $pdfDocument->purchase_order_processes->last();
                        $receiver = User::findOrFail($lastProcess->user_id);
                        $sender = Auth::user();
                        $receiver->notify(new PurchaseOrderRejected($purchaseOrder, $sender));
                        break;

                    default:
                        # code...
                        break;
                }
            }

            // Purchase Order Status 변경
            $purchaseOrder->status = $request->status;
            $purchaseOrder->save();

            $process = savePurchaseOrderProcess($request->process, $pdfDocument->id);
            updateList($purchaseOrder, 'purchase_order_list', $request->status);

            return response()->json([
                "status" => $request->status,
                "process" => $request->process,
                "message" => "PDF Status has changed to " . $request->process . " successfully."
            ]);
        } else {

            // 현재 프로세스
            $process = savePurchaseOrderProcess($request->process, $pdfDocument->id);

            //Send Mail
            if (($exchangedTotalPrice > 500000 || $purchaseOrder->is_emergency) && $request->process === "SUBMITTED") {
                $sender = Auth::user();
                $managers = User::permission('approve-purchase-order')->get();
                Notification::send($managers, new PurchaseOrderSubmitted($purchaseOrder, $sender));
            }

            $purchaseOrder->status = $request->status;
            $purchaseOrder->save();

            updateList($purchaseOrder, 'purchase_order_list', $request->status);

            return response()->json([
                'status' => $request->status,
                "process" => $request->process,
                "message" => "PDF Status has changed to " . $request->status . " successfully.",
            ]);
        }
    }
}
