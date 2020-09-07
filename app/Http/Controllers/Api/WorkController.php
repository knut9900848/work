<?php

namespace App\Http\Controllers\Api;

use App\Model\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Company;
use App\Model\Project;
use App\Model\Category;
use App\Model\Admin\Currency;
use App\Model\Admin\Unit;
use App\Model\Admin\Bank;
use App\Model\Admin\PaymentMethod;
use App\User;
use Carbon\Carbon;
use App\Model\SubProject;
use App\Model\Quotation;
use App\Model\WorkStatusHistory;
use App\Http\Resources\WorkStatusHistory as WorkStatusHistoryResource;
use App\Http\Resources\WorkQuotation as WorkQuotationResource;
use App\Model\AccountTransaction;

class WorkController extends Controller
{
    public function index(Request $request)
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
                ->orderBy('updated_at', 'desc')->simplePaginate(500);
            $totalRecords = 100;
        } else {
            $works = Work::orderBy('updated_at', 'desc')->simplePaginate(500);
            $totalRecords = count(Work::all());
        }

        $companies = Company::all();
        $projects = Project::all();
        $categories  = Category::all();
        $currencies = Currency::all();
        $units = Unit::all();
        $users = User::all();
        $banks = Bank::all();
        $paymentMethods = PaymentMethod::all();
        $users = User::all();

        return response()->json([
            "works" => $works,
            "companies" => $companies,
            "projects" => $projects,
            "categories" => $categories,
            "currencies" => $currencies,
            "units" => $units,
            "users" => $users,
            "banks" => $banks,
            "paymentMethods" => $paymentMethods,
            "totalRecords" => $totalRecords,
            "request" => $request->all(),
            "isset" => isset($request),
        ]);
    }

    public function show($work_id)
    {
        $work = Work::findOrFail($work_id);
        $subProjects = $work->project->sub_projects;

        return response()->json([
            "work" => $work,
            "subProjects" => $subProjects,
            "saleOrderId" => $work->sale_order->id,
            "wccId" => $work->wcc->id,
            "invoiceId" => $work->invoice->id,
            "paymentId" => $work->payment->id,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'company_id' => 'required',
            'project_id' => 'required',
            'sub_project_id' => 'required',
            'category_id' => 'required',
            'currency_id' => 'required'
        ]);

        $work = new Work;
        $work->number = "Temp Number";
        $work->status = "OPEN";
        $work->phase = "OPENED";
        $work->company_id = $request->company_id;
        $work->project_id = $request->project_id;
        $work->sub_project_id = $request->sub_project_id;
        $work->category_id = $request->category_id;
        $work->currency_id = $request->currency_id;
        $work->currency_name = Currency::findOrFail($request->currency_id)->name;
        $work->branch_id = '1';
        $work->department_id = '1';
        $work->description = $request->description;

        $work->save();

        $subProject = SubProject::findOrFail($work->sub_project_id);
        $workCount = $subProject->works->count();

        switch (strlen($workCount)) {
            case "1":
                $workNumber = '000' . $workCount;
                break;
            case "2":
                $workNumber = '00' . $workCount;
                break;
            case "3":
                $workNumber = '0' . $workCount;
                break;
            default:
                $workNumber = $workCount;
                break;
        }

        $projectCode = $work->project->code;
        $companyCode = $work->company->code;
        $subProjectCode = $work->sub_project->code;
        $categoryCode = $work->category->code;

        $number = "W" . $projectCode . "-" . $companyCode . "-" . $subProjectCode . "-" . $categoryCode . "-" . $workNumber;
        $work->number = $number;
        $work->save();

        $work = Work::findOrFail($work->id);

        $workStatusHistory = new WorkStatusHistory;
        $workStatusHistory->name = "OPEN";
        $workStatusHistory->description = "Create";
        $workStatusHistory->user_id = auth()->user()->id;
        $workStatusHistory->work_id = $work->id;
        $workStatusHistory->save();

        return response()->json([
            "result" => "success",
            "message" => "New work has created successfully.",
            "work" => $work,
        ]);
    }

    public function update(Request $request, $work_id)
    {
        $request->validate([
            'company_id' => 'required',
            'currency_id' => 'required'
        ]);

        $work = Work::findOrFail($work_id);
        $work->currency_id = $request->currency_id;
        $work->description = $request->description;
        $work->save();

        return response()->json([
            "result" => "success",
            "message" => "Work has updated successfully.",
            "work" => $work,
        ]);
    }

    public function searchQuotations($work_id, $company_id, $sub_project_id)
    {
        $quotations = Quotation::where([
            ['work_id', null],
            ['company_id', $company_id],
            ['sub_project_id', $sub_project_id],
            ['status', '<>', 'COMPLETED'],
        ])->get();

        return response()->json([
            "quotations" => WorkQuotationResource::collection($quotations),
        ]);
    }

    public function connectQuotations(Request $request, $work_id)
    {
        foreach ($request->all() as $item) {
            $quotation = Quotation::findOrFail($item['id']);
            $quotation->work_id = $work_id;
            $quotation->save();
        }

        // Update deliver note
        $work = Work::findOrFail($work_id);
        $sale_order_number = $work->sale_order->number;
        $invoice_date = $work->invoice->date;
        $invoice_payment_due_date = $work->invoice->payment_due_date;
        $payment_received_date = $work->payment->date;

        $quotation_lines = $quotation->quotation_lines;
        foreach ($quotation_lines as $line) {
            $line->delivery_note->sale_order_number = $sale_order_number;
            $line->delivery_note->invoice_date = $invoice_date;
            $line->delivery_note->invoice_payment_due_date = $invoice_payment_due_date;
            $line->delivery_note->payment_received_date = $payment_received_date;
            $line->delivery_note->save();
        }

        return response()->json([
            "result" => "success",
            "message" => "Selected Quotation connected successfully."
        ]);
    }

    public function disconnectQuotations(Request $request, $work_id)
    {
        $quotation = Quotation::findOrFail($request->id);

        // Update deliver note
        $quotation_lines = $quotation->quotation_lines;
        foreach ($quotation_lines as $line) {
            $line->delivery_note->sale_order_number = null;
            $line->delivery_note->invoice_date = null;
            $line->delivery_note->invoice_payment_due_date = null;
            $line->delivery_note->payment_received_date = null;
            $line->delivery_note->save();
        }

        $quotation->work_id = null;
        $quotation->save();

        return response()->json([
            "result" => "success",
            "message" => "Selected Quotation disconnected successfully."
        ]);
    }

    public function getRelatedQuotations($work_id)
    {
        $work = Work::findOrFail($work_id);
        $relatedQuotations = $work->quotations;

        return response()->json([
            "relatedQuotations" => WorkQuotationResource::collection($relatedQuotations),
        ]);
    }

    public function changeWorkStatus(Request $request, $work_id)
    {
        $work = Work::findOrFail($work_id);

        $currentHistory = $work->work_status_histories->last();
        if ($currentHistory->name === $request->name) {
            return response()->json([
                "result" => "fail",
                "message" => "The current state and the selected state are the same.",
                "name" => $currentHistory->name,
                "color" => "red"
            ]);
        }

        $request->validate([
            'name' => 'required',
            'description' => 'nullable|max:255'
        ]);

        $workStatusHistory = new WorkStatusHistory;
        $workStatusHistory->name = $request->name;
        $workStatusHistory->description = $request->description;
        $workStatusHistory->work_id = $work_id;
        $workStatusHistory->user_id = auth()->user()->id;
        $workStatusHistory->save();

        $work->status = $request->name;
        $work->save();

        return response()->json([
            "result" => "success",
            "message" => "Work Status has changed successfully.",
            "name" => $workStatusHistory->name,
            "color" => "primary"
        ]);
    }

    public function getWorkStatusHistories($work_id)
    {
        $work = Work::findOrFail($work_id);
        $workStatusHistories = $work->work_status_histories;
        $workStatusHistoriesCollection = WorkStatusHistoryResource::collection($workStatusHistories);

        return response()->json([
            "workStatusHistories" => $workStatusHistoriesCollection
        ]);
    }

    public function searchTransaction()
    {
        // $transactions = AccountTransaction::has('works', '=', 'null')->get();
        // $transactions = AccountTransaction::whereHas('works', function ($query) {
        //     return $query->where('account_transaction_id', '=', null);
        // })->get();

        $transactions = AccountTransaction::orderBy('received_date', 'DESC')->get();

        return response()->json([
            "transactions" => $transactions
        ]);
    }

    public function connectTransaction(Request $request, $work_id)
    {
        $work = Work::findOrfail($work_id);
        $work->account_transaction_id = $request->id;
        $work->save();

        $transaction = AccountTransaction::findOrFail($work->account_transaction_id);

        return response()->json([
            "result" => "success",
            "message" => "Selected transaction connected successfully.",
            "transaction" => $transaction
        ]);
    }

    public function disconnectTransaction(Request $request, $work_id)
    {
        $work = Work::findOrFail($work_id);
        $work->account_transaction_id = null;
        $work->save();

        return response()->json([
            "result" => "success",
            "message" => "Selected transaction disconnected successfully."
        ]);
    }

    public function getRelatedTransaction($work_id)
    {
        $work = Work::findOrFail($work_id);
        $relatedTransaction = $work->account_transaction;

        // if (!$relatedTransaction) {
        //     return response()->json([
        //         "relatedTransaction" => [],
        //     ]);
        // }

        return response()->json([
            "relatedTransaction" => $relatedTransaction,
        ]);
    }
}
