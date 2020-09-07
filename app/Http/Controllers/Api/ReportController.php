<?php

namespace App\Http\Controllers\Api;

use App\Model\Report;
use App\Model\SaleOrder;
use App\Model\PurchaseOrder;
use App\Model\Quotation;
use App\Model\Invoice;
use Illuminate\Http\Request;
use Carbon\Carbon;
use PDF;
use Storage;
use App\Model\Admin\Currency;
use Illuminate\Support\Collection;

use App\Http\Controllers\Controller;

class ReportController extends Controller
{
    public function getDailyReports()
    { }

    public function getWeeklyReports()
    {
        //
    }

    public function getMonthlyReports()
    {
        //
    }

    public function generateDailyReport(Request $request)
    {
        $today = Carbon::now()->format("Y-m-d");
        $tomorrow = Carbon::now()->addDays(1)->format("Y-m-d");

        $saleOrders = SaleOrder::where('date', '=', $today)->get();
        $purchaseOrders = PurchaseOrder::where('issued_date', '=', $today)->get();
        $quotations = Quotation::where('issued_date', '=', $today)->get();
        $invoices = Invoice::where('date', '=', $today)->get();
        $purchaseOrderPayments = PurchaseOrder::where('payment_due_date', '=', $tomorrow)->get();

        $headerHtml = view()->make("pdfs.reports.daily.header", compact('today'))->render();
        $footerHtml = view()->make("pdfs.reports.daily.footer", compact('today'))->render();

        $generatePdf = PDF::loadView("pdfs.reports.daily.main", compact('saleOrders', 'purchaseOrders', 'quotations', 'invoices', 'purchaseOrderPayments', 'today'))
            ->setOption('header-html', $headerHtml)
            ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            ->setOption('footer-font-size', 8);

        $generatedPdfFile = Storage::disk('report_pdfs')->path("daily/" . "Daily_Report_" . $today);
        $generatePdf->save($generatedPdfFile);
    }

    public function generateWeeklyReport(Request $request)
    {
        $currencies = Currency::all();

        $now = Carbon::now();
        $today = $now->format('Y-m-d');
        $weekStartDate = $now->startOfWeek()->format("Y-m-d");
        $weekEndDate = $now->endOfWeek()->format("Y-m-d");
        $weekNumber = $now->week();
        $year = $now->year;

        $sentQuotations = Quotation::whereBetween('issued_date', [$weekStartDate, $weekEndDate])->get();
        $sentPurchaseOrders = PurchaseOrder::whereBetween('issued_date', [$weekStartDate, $weekEndDate])->get();
        $receivedSaleOrders = SaleOrder::whereBetween('date', [$weekStartDate, $weekEndDate])->get();
        $sentInvoice = Invoice::whereBetween('date', [$weekStartDate, $weekEndDate])->get();

        $amount =  new Collection;
        $amount->quotations = $sentQuotations->sum('total_price');
        $amount->purchaseOrders = $sentPurchaseOrders->sum('total_price');
        $amount->saleOrders = $receivedSaleOrders->sum('total_price');
        $amount->invoices = $sentInvoice->sum('total_price');

        $overduePayments = Invoice::whereDate('payment_due_date', '<', $today)->get();

        // 기존 PDF 파일이 있으면 삭제를 한다.
        if (Storage::disk('report_pdfs')->exists("weekly/" . "Weekly_Report_" . $year . '_' . $weekNumber)) {
            Storage::disk('report_pdfs')->delete("weekly/" . "Weekly_Report_" . $year . '_' . $weekNumber);
        }

        $headerHtml = view()->make("pdfs.reports.weekly.header", compact('weekStartDate', 'weekEndDate', 'weekNumber', 'year'))->render();
        $footerHtml = view()->make("pdfs.reports.weekly.footer", compact('weekStartDate', 'weekEndDate'))->render();

        $generatePdf = PDF::loadView("pdfs.reports.weekly.main", compact('weekStartDate', 'weekEndDate', 'weekNumber', 'year', 'sentQuotations', 'sentPurchaseOrders', 'receivedSaleOrders', 'sentInvoice', 'currencies', 'amount', 'overduePayments'))
            ->setOption('header-html', $headerHtml)
            // ->setOption('enable-javascript', true)
            // ->setOption('javascript-delay', 15000)
            // ->setOption('enable-smart-shrinking', true)
            // ->setOption('no-stop-slow-scripts', true)
            // ->setOption('footer-html', $footerHtml)
            ->setPaper('a4')
            ->setOption('footer-font-size', 8);

        $generatedPdfFile = Storage::disk('report_pdfs')->path("weekly/" . "Weekly_Report_" . $year . '_' . $weekNumber);
        $generatePdf->save($generatedPdfFile);
    }

    public function generateMonthlyReport(Request $request)
    {
        //
    }
}
