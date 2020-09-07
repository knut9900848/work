<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\InvoicePdfDocument;
use App\Model\Invoice;
use App\User;
use App\Http\Resources\InvoicePdfDocument as InvoucePdfDocumentResource;
use Auth;
use PDF;
use iio\libmergepdf\Merger;
use Carbon\Carbon;
use Storage;
use Notification;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Notifications\InvoiceSubmitted;
use App\Notifications\InvoiceApproved;
use App\Notifications\InvoiceRejected;

class InvoicePdfDocumentController extends Controller
{
    public function __construct()
    { }

    public function index($invoice_id)
    {
        $invoice = Invoice::findOrFail($invoice_id);
        $pdfDocuments = $invoice->invoice_pdf_documents;

        if (!empty($pdfDocuments)) {
            return response()->json([
                "pdfDocuments" => InvoucePdfDocumentResource::collection($pdfDocuments),
            ]);
        };

        return;
    }

    public function store(Request $request, $invoice_id)
    {

        $invoice = Invoice::findOrFail($invoice_id);
        $option = $invoice->invoice_option;
        $existPdfDocumentFiles = $invoice->invoice_pdf_documents;

        $newPdfDocumentFile = new InvoicePdfDocument;

        // 기존에 생성된 파일이 없다면 버전을 0으로 세팅해 준다.
        if ($existPdfDocumentFiles->count() === 0) {
            $newPdfDocumentFile->version = 0;
            // 고객으로 부터 거부된 INVOICE는 재 생성시 버전을 +1 한다.
        } elseif ($existPdfDocumentFiles->last()->invoice_processes->last()->name === "DENIED") {
            $newPdfDocumentFile->version = $existPdfDocumentFiles->last()->version + 1;
            // 그렇지 않을경우 버전 업이 필요 없음으로 이전 버전을 사용한다.
        } else {
            $newPdfDocumentFile->version = $existPdfDocumentFiles->last()->version;
        }

        // PDF DB에 입력한다.
        $version = $newPdfDocumentFile->version;

        $newPdfDocumentFile->origin_name = $invoice->number;
        $newPdfDocumentFile->name =  Carbon::now()->timestamp;
        $newPdfDocumentFile->extension = "pdf";
        $newPdfDocumentFile->user_id = Auth::user()->id;
        $newPdfDocumentFile->invoice_id = $invoice->id;
        $newPdfDocumentFile->save();

        // Process를 입력한다.
        $process = saveInvoiceProcess('Draft', $newPdfDocumentFile->id);

        switch ($option->pdf_form_type) {
            case 'baker-hughes':
            $marginTop = "65mm";
            $marginBottom = "55mm";
            $page = "";
            $viewPath = "pdfs.invoices.baker-hughes";
            break;

            case 'baker-hughes':
            $marginTop = "65mm";
            $marginBottom = "8mm";
            $page = "Page [page] of [toPage]";
            $viewPath = "pdfs.invoices.lisa";
            break;

          default:
            $marginTop = "65mm";
            $marginBottom = "8mm";
            $page = "Page [page] of [toPage]";
            $viewPath = "pdfs.invoices.default";
            break;
        }
        // if ($invoice->invoice_option->pdf_form_type === "baker-hughes") {
        //     $marginTop = "65mm";
        //     $marginBottom = "55mm";
        //     $page = "";
        //     $viewPath = "pdfs.invoices.baker-hughes";
        // } else if ($invoice->invoice_option->pdf_form_type === "lisa") {
        //     $marginTop = "65mm";
        //     $marginBottom = "8mm";
        //     $page = "Page [page] of [toPage]";
        //     $viewPath = "pdfs.invoices.lisa";
        // } else {
        //     $marginTop = "65mm";
        //     $marginBottom = "8mm";
        //     $page = "Page [page] of [toPage]";
        //     $viewPath = "pdfs.invoices.default";
        // }

        $headerHtml = view()->make($viewPath . ".header", compact('invoice', 'version'))->render();
        $footerHtml = view()->make($viewPath . ".footer", compact('invoice', 'process'))->render();

        $generatePdf = PDF::loadView($viewPath . ".main", compact('invoice', 'option', 'process'))
            ->setOption('margin-top', $marginTop)
            ->setOption('margin-bottom', $marginBottom)
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            // ->setOption('page-offset', 2)
            ->setOption('footer-right', $page)
            ->setOption('footer-font-size', 8)
            // ->setOption('footer-left', 'Confidential')
            // ->setOption('footer-right', date)
            // ->setOption('toc', true)
            // ->setOption('toc-level-indentation', 3)
            ->setOrientation('landscape');

        // 파일명을 포함한 경로
        $generatedPdfFile = Storage::disk('invoice_pdfs')->path($newPdfDocumentFile->name);
        $generatePdf->save($generatedPdfFile);

        return response()->json([
            "pdfDocument" => new InvoucePdfDocumentResource($newPdfDocumentFile),
            "result" => "success",
            "message" => "New PDF has generated successfully."
        ]);
    }

    public function update(Request $request, $invoice_id)
    {
        $invoice = Invoice::findOrFail($invoice_id);
        $option = $invoice->invoice_option;
        $existPdfDocumentFiles = $invoice->invoice_pdf_documents;

        // 서버에 저장된 파일명을 구한다.
        $existFileName = $existPdfDocumentFiles->last()->name;
        $version = $existPdfDocumentFiles->last()->version;
        $process = "Draft";

        if ($invoice->invoice_option->pdf_form_type === "baker-hughes") {
            $marginTop = "65mm";
            $marginBottom = "55mm";
            $page = "";
            $viewPath = "pdfs.invoices.baker-hughes";
        } else if ($invoice->invoice_option->pdf_form_type === "lisa") {
            $marginTop = "65mm";
            $marginBottom = "8mm";
            $page = "Page [page] of [toPage]";
            $viewPath = "pdfs.invoices.lisa";
        } else {
            $marginTop = "65mm";
            $marginBottom = "8mm";
            $page = "Page [page] of [toPage]";
            $viewPath = "pdfs.invoices.default";
        }

        $headerHtml = view()->make($viewPath . ".header", compact('invoice', 'version'))->render();
        $footerHtml = view()->make($viewPath . ".footer", compact('invoice', 'process'))->render();

        $generatePdf = PDF::loadView($viewPath . ".main", compact('invoice', 'option', 'process'))
            ->setOption('margin-top', $marginTop)
            ->setOption('margin-bottom', $marginBottom)
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            // ->setOption('page-offset', 2)
            ->setOption('footer-right', $page)
            ->setOption('footer-font-size', 8)
            // ->setOption('footer-left', 'Confidential')
            // ->setOption('footer-right', date)
            // ->setOption('toc', true)
            // ->setOption('toc-level-indentation', 3)
            ->setOrientation('landscape');

        // 기존 PDF 파일이 있으면 삭제를 한다.
        if (Storage::disk('invoice_pdfs')->exists($existFileName)) {
            Storage::disk('invoice_pdfs')->delete($existFileName);
        }

        $generatedPdfFile = Storage::disk('invoice_pdfs')->path($existFileName);
        $generatePdf->save($generatedPdfFile);

        return response()->json([
            "result" => "success",
            "message" => "PDF has updated successfully."
        ]);
    }

    public function download($invoice_id, $pdfDocument_id)
    {
        $pdf = InvoicePdfDocument::findOrFail($pdfDocument_id);
        $storagePath  = Storage::disk('invoice_pdfs')->path('');
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

    public function changeStatus(Request $request, $invoice_id, $pdfDocument_id)
    {
        $invoice = Invoice::findOrFail($invoice_id);
        $option = $invoice->invoice_option;
        $pdfDocument = InvoicePdfDocument::findOrFail($pdfDocument_id);

        $totalPrice = $invoice->total_price;
        $exchangeRate = $invoice->work->currency->exchange_rate;
        $exchangedTotalPrice = $totalPrice * $exchangeRate;
        $manager = $invoice->invoice_approvers->first()->manager;
        $approvalAmount = User::findOrFail($manager->id)->member_approval_amounts->where('name', '=', 'approve-invoice')->first();

        // 지정된 금액보다 큰 금액에 대해서 권한없는 사용자가 승인을 클릭시 권한 없음을 출력
        if ($request->process == "APPROVED" || $request->process === "REJECTED") {
            if (!auth()->user()->can('approve-invoice')) {
                if ($exchangedTotalPrice > $approvalAmount->amount) {
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

            if ($invoice->invoice_option->pdf_form_type === "baker-hughes") {
                $marginTop = "65mm";
                $marginBottom = "55mm";
                $page = "";
                $viewPath = "pdfs.invoices.baker-hughes";
            } else if ($invoice->invoice_option->pdf_form_type === "lisa") {
                $marginTop = "65mm";
                $marginBottom = "8mm";
                $page = "Page [page] of [toPage]";
                $viewPath = "pdfs.invoices.lisa";
            } else {
                $marginTop = "65mm";
                $marginBottom = "8mm";
                $page = "Page [page] of [toPage]";
                $viewPath = "pdfs.invoices.default";
            }

            $headerHtml = view()->make($viewPath . ".header", compact('invoice', 'version'))->render();
            $footerHtml = view()->make($viewPath . ".footer", compact('invoice', 'process'))->render();

            $generatePdf = PDF::loadView($viewPath . ".main", compact('invoice', 'option', 'process'))
                ->setOption('margin-top', $marginTop)
                ->setOption('margin-bottom', $marginBottom)
                ->setOption('header-html', $headerHtml)
                ->setOption('footer-html', $footerHtml)
                ->setPaper('a4')
                // ->setOption('page-offset', 2)
                ->setOption('footer-right', $page)
                ->setOption('footer-font-size', 8)
                // ->setOption('footer-left', 'Confidential')
                // ->setOption('footer-right', date)
                // ->setOption('toc', true)
                // ->setOption('toc-level-indentation', 3)
                ->setOrientation('landscape');

            // 기존 PDF 파일이 있으면 삭제를 한다.
            if (Storage::disk('invoice_pdfs')->exists($existFileName)) {
                Storage::disk('invoice_pdfs')->delete($existFileName);
            }

            $generatedPdfFile = Storage::disk('invoice_pdfs')->path($existFileName);
            $generatePdf->save($generatedPdfFile);

            if ($exchangedTotalPrice > $approvalAmount->amount) {
                switch ($request->process) {
                    case 'APPROVED':
                        $lastProcess = $pdfDocument->invoice_processes->last();
                        $receiver = User::findOrFail($lastProcess->user_id);
                        $sender = Auth::user();
                        $receiver->notify(new InvoiceApproved($invoice, $sender));
                        break;

                    case 'REJECTED':
                        $lastProcess = $pdfDocument->invoice_processes->last();
                        $receiver = User::findOrFail($lastProcess->user_id);
                        $sender = Auth::user();
                        $receiver->notify(new InvoiceRejected($invoice, $sender));
                        break;

                    default:
                        break;
                }
            }

            $process = saveInvoiceProcess($request->process, $pdfDocument->id);

            return response()->json([
                "process" => $request->process,
                "message" => "PDF Status has changed to " . $request->process . " successfully."
            ]);
        } else {

            // 현재 프로세스
            $process = saveInvoiceProcess($request->process, $pdfDocument->id);

            // Send Mail
            if ($exchangedTotalPrice > $approvalAmount->amount && $request->process === "SUBMITTED") {
                $sender = Auth::user();
                Notification::send($manager, new InvoiceSubmitted($invoice, $sender));
            }

            return response()->json([
                "process" => $request->process,
                "message" => "PDF Status has changed to " . $request->status . " successfully.",
                "approvalAmount" => $approvalAmount
            ]);
        }
    }
}
