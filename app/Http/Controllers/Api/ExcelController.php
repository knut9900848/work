<?php

namespace App\Http\Controllers\Api;

use App\Model\Excel;
use App\Model\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exports\WorksExport;
use Storage;

class ExcelController extends Controller
{
    public function ConvertWork(Request $request)
    {
        if ($request->workFilterMode  ===  "true") {
            $status = ($request->status === "undefined" || !isset($request->status)) ? false : true;
            $phase = ($request->phase === "undefined" || !isset($request->phase)) ? false : true;
            $project = ($request->project === "undefined" || !isset($request->project)) ? false : true;
            $subProject = ($request->subProject === "undefined" || !isset($request->subProject)) ? false : true;
            $company = ($request->company === "undefined" || !isset($request->company)) ? false : true;
            $category = ($request->category === "undefined" || !isset($request->category)) ? false : true;
            $poStartDate = ($request->poStartDate === "null" || !isset($request->poStartDate)) ? false : true;
            $poEndDate = ($request->poEndDate === "null" || !isset($request->poEndDate)) ? false : true;
            $invoiceStartDate = ($request->invoiceStartDate === "null" || !isset($request->invoiceStartDate)) ? false : true;
            $invoiceEndDate = ($request->invoiceEndDate === "null" || !isset($request->invoiceEndDate)) ? false : true;
            $paymentDueDateStartDate = ($request->paymentDueDateStartDate === "null" || !isset($request->paymentDueDateStartDate)) ? false : true;
            $paymentDueDateEndDate = ($request->paymentDueDateEndDate === "null" || !isset($request->paymentDueDateEndDate)) ? false : true;
            $paymentStartDate = ($request->paymentStartDate === "null" || !isset($request->paymentStartDate)) ? false : true;
            $paymentEndDate = ($request->paymentEndDate === "null" || !isset($request->paymentEndDate)) ? false : true;

            $works = Work::when($status, function ($query) use ($request) {
                $query->where('status', $request->status);
            })
                ->when($phase, function ($query) use ($request) {
                    $query->where('phase', $request->input('phase'));
                })
                ->when($project, function ($query) use ($request) {
                    $query->where('project_id', $request->input('project'));
                })
                ->when($subProject, function ($query) use ($request) {
                    $query->where('sub_project_id', $request->input('subProject'));
                })
                ->when($company, function ($query) use ($request) {
                    $query->where('company_id', $request->input('company'));
                })
                ->when($category, function ($query) use ($request) {
                    $query->where('category_id', $request->input('category'));
                })
                ->when($poStartDate, function ($query) use ($request) {
                    $query->whereDate('sale_order_date', '>=', $request->input('poStartDate'));
                })
                ->when($poEndDate, function ($query) use ($request) {
                    $query->whereDate('sale_order_date', '<=', $request->input('poEndDate'));
                })
                ->when($invoiceStartDate, function ($query) use ($request) {
                    $query->whereDate('invoice_date', '>=', $request->input('invoiceStartDate'));
                })
                ->when($invoiceEndDate, function ($query) use ($request) {
                    $query->whereDate('invoice_date', '<=', $request->input('invoiceEndDate'));
                })
                ->when($paymentDueDateStartDate, function ($query) use ($request) {
                    $query->whereDate('payment_due_date', '>=', $request->input('paymentDueDateStartDate'));
                })
                ->when($paymentDueDateEndDate, function ($query) use ($request) {
                    $query->whereDate('payment_due_date', '<=', $request->input('paymentDueDateEndDate'));
                })
                ->when($paymentStartDate, function ($query) use ($request) {
                    $query->whereDate('payment_date', '>=', $request->input('paymentStartDate'));
                })
                ->when($paymentEndDate, function ($query) use ($request) {
                    $query->whereDate('payment_date', '<=', $request->input('paymentEndDate'));
                })
                ->get();
            $totalRecords = 100;
        } else {
            $works = Work::all();
            $totalRecords = count(Work::all());
        }

        return (new WorksExport($works))->store('works.xlsx');
    }

    public function download()
    {
        $storagePath  = Storage::disk()->path('');
        $file = $storagePath . "works.xlsx";

        $headers = [
            'Content-Type' => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            'Content-Encoding' => 'UTF-8',
            'Content-Disposition' => 'attachment',
            'filename' => "works.xlsx",
        ];

        return response()->download($file, "works.xlsx", $headers);
    }
}
