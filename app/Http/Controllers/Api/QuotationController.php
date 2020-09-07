<?php

namespace App\Http\Controllers\Api;

use App\Model\Quotation;
use App\Model\QuotationList;
use App\Model\QuotationOption;
use App\Model\Company;
use App\Model\Project;
use App\Model\Admin\Branch;
use App\Model\Category;
use App\Model\Admin\Currency;
use App\Model\Admin\Unit;
use App\User;
use App\Model\QuotationStatus;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuotationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['can:access-quotation']);
    }

    public function index()
    {
        $quotations = QuotationList::orderBy('issued_date', 'desc')->simplePaginate(500);
        $companies = Company::all();
        $projects = Project::all();
        $branches = Branch::all();
        $categories = Category::all();
        $currencies = Currency::all();
        $users = User::all();
        $units = Unit::all();
        $totalRecords = count(QuotationList::all());

        return response()->json([
            "quotations" => $quotations,
            "companies" => $companies,
            "projects" => $projects,
            "branches" => $branches,
            "categories" => $categories,
            "currencies" => $currencies,
            "users" => $users,
            "units" => $units,
            "totalRecords" => $totalRecords,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'number' => 'required|max:100|unique:quotations',
            'company_id' => 'required',
            'project_id' => 'required',
            'category_id' => 'required',
            'currency_id' => 'required',
            'receiver_id' => 'required',
            'originator_id' => 'required',
            'issued_date' => 'required',
            'valid_terms' => 'nullable|numeric|min:1|max:100'
        ]);

        if ($request->has('valid_terms') && $request->valid_terms !== '') {
            $issued_date = Carbon::createFromFormat('Y-m-d', $request->issued_date);
            $expired_date = $issued_date->addDays($request->valid_terms);
        } else {
            $expired_date = null;
        }

        $quotation = new Quotation;
        $quotation->number = $request->number;
        $quotation->sr_number = $request->sr_number;
        $quotation->status = 'OPENED';
        $quotation->company_id = $request->company_id;
        $quotation->project_id = $request->project_id;
        $quotation->sub_project_id = $request->sub_project_id;
        $quotation->department_id = '1';
        $quotation->category_id = $request->category_id;
        $quotation->currency_id = $request->currency_id;
        $quotation->originator_id = $request->originator_id;
        $quotation->receiver_id = $request->receiver_id;
        $quotation->issued_date = $request->issued_date;
        $quotation->valid_terms = $request->valid_terms;
        $quotation->expired_date = $expired_date;
        $quotation->total_price = $request->total_price;
        $quotation->discount = $request->discount;
        $quotation->shipping_fee = $request->shipping_fee;
        $quotation->tax = $request->tax;
        $quotation->grand_total = $request->grand_total;
        $quotation->is_emergency = $request->is_emergency;
        $quotation->remarks = $request->remarks;
        $quotation->summary = $request->summary;
        $quotation->branch_id = 1;
        $quotation->company_address_id = Company::findOrFail($quotation->company_id)->addresses->first()->id;
        $quotation->save();

        $quotationListItem = new QuotationList;
        $quotationListItem->number = $quotation->number;
        $quotationListItem->sr_number = $quotation->sr_number;
        $quotationListItem->company = $quotation->company->name;
        $quotationListItem->project = $quotation->project->name;
        $quotationListItem->sub_project = $quotation->sub_project->name;
        $quotationListItem->category = $quotation->category->name;
        $quotationListItem->currency = $quotation->currency->name;
        $quotationListItem->branch = $quotation->branch->name;
        $quotationListItem->issued_date = $quotation->issued_date;
        $quotationListItem->valid_terms = $quotation->valid_terms;
        $quotationListItem->expired_date = $quotation->expired_date;
        $quotationListItem->quotation_id = $quotation->id;
        $quotationListItem->status = "OPENED";
        $quotationListItem->total_price = $quotation->total_price;
        $quotationListItem->discount = $quotation->discount;
        $quotationListItem->tax = $quotation->total_tax;
        $quotationListItem->grand_total = $quotation->grand_total;
        $quotationListItem->save();

        return response()->json([
            'result' => 'success',
            'quotation' => $quotation,
            'quotationListItem' => $quotationListItem,
            'exchangeRate' => $quotation->currency->exchange_rate,
            'message' => 'New Quotation has been created successfully.'
        ]);
    }

    public function show($quotation_id)
    {
        $quotation = Quotation::findOrFail($quotation_id);

        return response()->json([
            'quotation' => $quotation,
            'receivers' => $quotation->company->employees,
            'subProjects' => $quotation->project->sub_projects,
            'quotationLines' => $quotation->quotation_lines,
            'fields' => $quotation->fields,
            'attachments' => $quotation->attachments,
            'option' => $quotation->quotation_option,
            'exchangeRate' => $quotation->currency->exchange_rate,
        ]);
    }

    public function update(Request $request, $quotation_id)
    {
        $quotation = Quotation::findOrFail($quotation_id);

        $request->validate([
            'number' => 'required|max:100|unique:quotations,number,' . $quotation->id,
            'company_id' => 'required',
            'project_id' => 'required',
            'category_id' => 'required',
            'currency_id' => 'required',
            'receiver_id' => 'required',
            'originator_id' => 'required',
            'issued_date' => 'required',
            'valid_terms' => 'nullable|numeric|min:1|max:100'
        ]);

        if ($request->has('valid_terms') && $request->valid_terms !== null) {
            $issued_date = Carbon::createFromFormat('Y-m-d', $request->issued_date);
            $expired_date = $issued_date->addDays($request->valid_terms);
        } else {
            $expired_date = null;
        }

        $quotation->number = $request->number;
        $quotation->sr_number = $request->sr_number;
        $quotation->company_id = $request->company_id;
        $quotation->project_id = $request->project_id;
        $quotation->sub_project_id = $request->sub_project_id;
        $quotation->category_id = $request->category_id;
        $quotation->currency_id = $request->currency_id;
        $quotation->originator_id = $request->originator_id;
        $quotation->receiver_id = $request->receiver_id;
        $quotation->issued_date = $request->issued_date;
        $quotation->valid_terms = $request->valid_terms;
        $quotation->expired_date = $expired_date;
        $quotation->total_price = $request->total_price;
        $quotation->discount = $request->discount;
        $quotation->shipping_fee = $request->shipping_fee;
        $quotation->tax = $request->tax;
        $quotation->grand_total = $request->grand_total;
        $quotation->is_emergency = $request->is_emergency;
        $quotation->remarks = $request->remarks;
        $quotation->summary = $request->summary;
        $quotation->company_address_id = Company::findOrFail($quotation->company_id)->addresses->first()->id;
        $quotation->save();

        $quotationListItem = QuotationList::where('quotation_id', $quotation->id)->first();
        $quotationListItem->number = $quotation->number;
        $quotationListItem->sr_number = $quotation->sr_number;
        $quotationListItem->company = $quotation->company->name;
        $quotationListItem->project = $quotation->project->name;
        $quotationListItem->category = $quotation->category->name;
        $quotationListItem->currency = $quotation->currency->name;
        $quotationListItem->branch = $quotation->branch->name;
        $quotationListItem->issued_date = $quotation->issued_date;
        $quotationListItem->valid_terms = $quotation->valid_terms;
        $quotationListItem->expired_date = $quotation->expired_date;
        $quotationListItem->quotation_id = $quotation->id;
        $quotationListItem->status = $quotation->status;
        $quotationListItem->total_price = $quotation->total_price;
        $quotationListItem->discount = $quotation->discount;
        $quotationListItem->tax = $quotation->tax;
        $quotationListItem->grand_total = $quotation->grand_total;
        $quotationListItem->save();

        return response()->json([
            'result' => 'success',
            'quotation' => $quotation,
            'quotationListItem' => $quotationListItem,
            'exchangeRate' => $quotation->currency->exchange_rate,
            'message' => 'Quotation has updated successfully.'
        ]);
    }
}
