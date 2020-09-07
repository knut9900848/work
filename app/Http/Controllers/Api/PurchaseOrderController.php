<?php

namespace App\Http\Controllers\Api;

use App\Model\PurchaseOrder;
use App\Model\PurchaseOrderList;
use App\Model\PurchaseOrderOption;
use App\Model\Company;
use App\Model\Project;
use App\Model\Admin\Branch;
use App\Model\Category;
use App\Model\Admin\Currency;
use App\Model\Admin\Unit;
use App\Model\Supplier;
use App\Model\Admin\PaymentTerms;
use App\Model\Admin\PurchaseOrderTermsAndConditions;
use App\User;
use Carbon\Carbon;
use App\Http\Resources\PurchaseOrder as PurchaseOrderResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PurchaseOrderController extends Controller
{
    public function index()
    {
        $purchaseOrders = PurchaseOrderList::orderBy('issued_date', 'desc')->simplePaginate(500);
        $totalRecords = count(PurchaseOrderList::all());
        $companies = Company::all();
        $projects = Project::all();
        $branches = Branch::all();
        $categories = Category::all();
        $currencies = Currency::all();
        $users = User::all();
        $units = Unit::all();
        $suppliers = Supplier::all();
        $purchaseOrderTermsAndConditions = PurchaseOrderTermsAndConditions::all();

        return response()->json([
            "purchaseOrders" => $purchaseOrders,
            "companies" => $companies,
            "projects" => $projects,
            "branches" => $branches,
            "categories" => $categories,
            "currencies" => $currencies,
            "users" => $users,
            "units" => $units,
            "suppliers" => $suppliers,
            "purchaseOrderTermsAndConditions" => $purchaseOrderTermsAndConditions,
            'totalRecords' => $totalRecords,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'company_id' => 'required',
            'project_id' => 'required',
            'category_id' => 'required',
            'supplier_id' => 'required',
            'currency_id' => 'required',
            'receiver_id' => 'required',
            'originator_id' => 'required',
            'issued_date' => 'required',
        ]);

        // Set Purchase Order Number
        $supplier = Supplier::find($request->supplier_id);
        $supplierPurchaseOrderCount = PurchaseOrder::where('supplier_id', $supplier->id)->count() + 1;
        $purchaseOrderDate = generatePurchaseOrderNumberDateFormat($request->issued_date);
        $purchaseOrderNumber = 'POIES-' . $supplier->code . '-' . $supplierPurchaseOrderCount . '-' . $purchaseOrderDate;


        $purchaseOrder = new PurchaseOrder;
        $purchaseOrder->number = $purchaseOrderNumber;
        $purchaseOrder->sr_number = $request->sr_number;
        $purchaseOrder->company_id = $request->company_id;
        $purchaseOrder->project_id = $request->project_id;
        $purchaseOrder->sub_project_id = $request->sub_project_id;
        $purchaseOrder->department_id = '1';
        $purchaseOrder->branch_id = 1;
        $purchaseOrder->category_id = $request->category_id;
        $purchaseOrder->currency_id = $request->currency_id;
        $purchaseOrder->supplier_id = $request->supplier_id;
        $purchaseOrder->originator_id = $request->originator_id;
        $purchaseOrder->receiver_id = $request->receiver_id;
        $purchaseOrder->issued_date = $request->issued_date;
        $purchaseOrder->ref_quote = $request->ref_quote;
        $purchaseOrder->delivery_address = $request->delivery_address;
        $purchaseOrder->delivery_date = $request->delivery_date;
        $purchaseOrder->payment_due_date = $request->payment_due_date;
        $purchaseOrder->payment_date = $request->payment_date;
        $purchaseOrder->total_price = $request->total_price;
        $purchaseOrder->discount = $request->discount;
        $purchaseOrder->tax = $request->tax;
        $purchaseOrder->grand_total = $request->grand_total;
        $purchaseOrder->shipping_fee = $request->shipping_fee;
        $purchaseOrder->is_emergency = $request->is_emergency;
        $purchaseOrder->remarks = $request->remarks;
        $purchaseOrder->summary = $request->summary;
        $purchaseOrder->status = "OPENED";
        // $purchaseOrder->supplier_address_id = Supplier::findOrFail($purchaseOrder->company_id)->addresses->first()->id;
        $purchaseOrder->save();

        $purchaseOrderListItem = new PurchaseOrderList;
        $purchaseOrderListItem->purchase_order_id = $purchaseOrder->id;
        $purchaseOrderListItem->number = $purchaseOrder->number;
        $purchaseOrderListItem->sr_number = $purchaseOrder->sr_number;
        $purchaseOrderListItem->company = $purchaseOrder->company->name;
        $purchaseOrderListItem->project = $purchaseOrder->project->name;
        $purchaseOrderListItem->category = $purchaseOrder->category->name;
        $purchaseOrderListItem->currency = $purchaseOrder->currency->name;
        $purchaseOrderListItem->branch = $purchaseOrder->branch->name;
        $purchaseOrderListItem->supplier = $purchaseOrder->supplier->name;
        $purchaseOrderListItem->issued_date = $purchaseOrder->issued_date;
        $purchaseOrderListItem->ref_quote = $purchaseOrder->ref_quote;
        $purchaseOrderListItem->delivery_address = $purchaseOrder->delivery_address;
        $purchaseOrderListItem->delivery_date = $purchaseOrder->delivery_date;
        $purchaseOrderListItem->payment_due_date = $purchaseOrder->payment_due_date;
        $purchaseOrderListItem->payment_date = $purchaseOrder->payment_date;
        $purchaseOrderListItem->total_price = $purchaseOrder->total_price;
        $purchaseOrderListItem->discount = $purchaseOrder->discount;
        $purchaseOrderListItem->tax = $purchaseOrder->tax;
        $purchaseOrderListItem->grand_total = $purchaseOrder->grand_total;
        $purchaseOrderListItem->status = "OPENED";
        $purchaseOrderListItem->save();

        return response()->json([
            'result' => 'success',
            'message' => 'New Purchase Order has been created successfully.',
            'purchaseOrder' => new PurchaseOrderResource($purchaseOrder),
            'purchaseOrderListItem' => $purchaseOrderListItem,
            'exchangeRate' => $purchaseOrder->currency->exchange_rate,
        ]);
    }

    public function show($purchase_order_id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($purchase_order_id);

        return response()->json([
            'purchaseOrder' => new PurchaseOrderResource($purchaseOrder),
            'receivers' => $purchaseOrder->supplier->employees,
            'purchaseOrderLines' => $purchaseOrder->purchase_order_lines,
            'fields' => $purchaseOrder->fields,
            'attachments' => $purchaseOrder->attachments,
            'option' => $purchaseOrder->purchase_order_option,
            'subProjects' => $purchaseOrder->project->sub_projects,
            'exchangeRate' => $purchaseOrder->currency->exchange_rate,
        ]);
    }

    public function update(Request $request, $purchase_order_id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($purchase_order_id);

        $request->validate([
            'company_id' => 'required',
            'project_id' => 'required',
            'category_id' => 'required',
            'supplier_id' => 'required',
            'currency_id' => 'required',
            'receiver_id' => 'required',
            'originator_id' => 'required',
            'issued_date' => 'required',
        ]);

        if ($request->has('valid_terms') && $request->valid_terms !== null) {
            $issued_date = Carbon::createFromFormat('Y-m-d', $request->issued_date);
            $expired_date = $issued_date->addDays($request->valid_terms);
        } else {
            $expired_date = null;
        }

        $purchaseOrder->sr_number = $request->sr_number;
        $purchaseOrder->company_id = $request->company_id;
        $purchaseOrder->project_id = $request->project_id;
        $purchaseOrder->sub_project_id = $request->sub_project_id;
        $purchaseOrder->department_id = '1';
        $purchaseOrder->branch_id = 1;
        $purchaseOrder->category_id = $request->category_id;
        $purchaseOrder->currency_id = $request->currency_id;
        $purchaseOrder->supplier_id = $request->supplier_id;
        $purchaseOrder->originator_id = $request->originator_id;
        $purchaseOrder->receiver_id = $request->receiver_id;
        $purchaseOrder->issued_date = $request->issued_date;
        $purchaseOrder->ref_quote = $request->ref_quote;
        $purchaseOrder->delivery_address = $request->delivery_address;
        $purchaseOrder->delivery_date = $request->delivery_date;
        $purchaseOrder->payment_due_date = $request->payment_due_date;
        $purchaseOrder->payment_date = $request->payment_date;
        $purchaseOrder->total_price = $request->total_price;
        $purchaseOrder->discount = $request->discount;
        $purchaseOrder->tax = $request->tax;
        $purchaseOrder->grand_total = $request->grand_total;
        $purchaseOrder->shipping_fee = $request->shipping_fee;
        $purchaseOrder->is_emergency = $request->is_emergency;
        $purchaseOrder->remarks = $request->remarks;
        $purchaseOrder->summary = $request->summary;
        $purchaseOrder->status = $request->status;
        $purchaseOrder->supplier_address_id = Supplier::findOrFail($purchaseOrder->company_id)->addresses->first()->id;
        $purchaseOrder->save();

        $purchaseOrderListItem = $purchaseOrder->purchase_order_list;
        $purchaseOrderListItem->purchase_order_id = $purchaseOrder->id;
        $purchaseOrderListItem->number = $purchaseOrder->number;
        $purchaseOrderListItem->sr_number = $purchaseOrder->sr_number;
        $purchaseOrderListItem->company = $purchaseOrder->company->name;
        $purchaseOrderListItem->project = $purchaseOrder->project->name;
        $purchaseOrderListItem->category = $purchaseOrder->category->name;
        $purchaseOrderListItem->currency = $purchaseOrder->currency->name;
        $purchaseOrderListItem->branch = $purchaseOrder->branch->name;
        $purchaseOrderListItem->supplier = $purchaseOrder->supplier->name;
        $purchaseOrderListItem->issued_date = $purchaseOrder->issued_date;
        $purchaseOrderListItem->ref_quote = $purchaseOrder->ref_quote;
        $purchaseOrderListItem->delivery_address = $purchaseOrder->delivery_address;
        $purchaseOrderListItem->delivery_date = $purchaseOrder->delivery_date;
        $purchaseOrderListItem->payment_due_date = $purchaseOrder->payment_due_date;
        $purchaseOrderListItem->payment_date = $purchaseOrder->payment_date;
        $purchaseOrderListItem->total_price = $purchaseOrder->total_price;
        $purchaseOrderListItem->discount = $purchaseOrder->discount;
        $purchaseOrderListItem->tax = $purchaseOrder->tax;
        $purchaseOrderListItem->grand_total = $purchaseOrder->grand_total;
        $purchaseOrderListItem->status = $purchaseOrder->status;
        $purchaseOrderListItem->save();

        return response()->json([
            'result' => 'success',
            'message' => 'Purchase Order has been updated successfully.',
            'purchaseOrder' => new PurchaseOrderResource($purchaseOrder),
            'purchaseOrderListItem' => $purchaseOrderListItem,
            'exchangeRate' => $purchaseOrder->currency->exchange_rate,
        ]);
    }

    // public function changeStatus(Request $request, $id) {
    //     $purchaseOrder = PurchaseOrder::findOrFail($id);
    //     $purchaseOrder->purchase_order_status_id = $request->status_id;
    //     $purchaseOrder->save();

    //     $purchaseOrderListItem = PurchaseOrderList::where('purchase_order_id', $purchaseOrder->id)->first();
    //     $purchaseOrderListItem->status = $purchaseOrder->purchase_order_status->name;
    //     $purchaseOrderListItem->save();

    //     return response()->json([
    //         'result' => 'success',
    //         'status_id' => $purchaseOrder->purchase_order_status_id,
    //         'purchaseOrderListItem' => $purchaseOrderListItem,
    //         'message' => 'Purchase Order Status has changed successfully.'
    //     ]);
    // }
}
