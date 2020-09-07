<?php

namespace App\Http\Controllers\Api;

use App\Model\SaleOrder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SaleOrderController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'number' => 'required|max:255|unique:sale_orders',
            'date' => 'required|date',
            'requestor_id' => 'required',
            'delivery_to' => 'nullable|max:255',
            'total_price' => 'required|numeric',
        ]);

        $saleOrder = new SaleOrder;
        $saleOrder->number = $request->input('number');
        $saleOrder->date = $request->input('date');
        $saleOrder->requestor_id = $request->input('requestor_id');
        $saleOrder->deliver_to = $request->input('deliver_to');
        $saleOrder->total_price = $request->input('total_price');
        $saleOrder->work_id = $request->input('work_id');
        $saleOrder->save();

        $work = $saleOrder->work;
        $work->sale_order_number = $saleOrder->number;
        $work->sale_order_date = $saleOrder->date;
        $work->phase = "RECPT PO";
        $work->sale_order_total_price = $saleOrder->total_price;
        $work->save();

        // Update Deliver Note
        $quotations = $work->quotations;
        foreach ($quotations as $quotation) {
            foreach ($quotation->quotation_lines as $line) {
                $line->delivery_note->sale_order_number = $saleOrder->number;
                $line->delivery_note->save();
            }
        }

        return response()->json([
            "result" => "success",
            "message" => "New PO registered successfully.",
            "saleOrder" => $saleOrder,
            "work" => $work,
        ]);
    }

    public function show($sale_order_id)
    {
        $saleOrder = SaleOrder::findOrFail($sale_order_id);
        $requesotrs = $saleOrder->work->company->employees;
        $option = $saleOrder->sale_order_option;
        $saleOrderLines = $saleOrder->sale_order_lines;
        $attachments = $saleOrder->attachments;

        return response()->json([
            "saleOrder" => $saleOrder,
            "requestors" => $requesotrs,
            "option" => $option,
            "saleOrderLines" => $saleOrderLines,
            "attachments" => $attachments,
        ]);
    }

    public function update(Request $request, $sale_order_id)
    {
        $saleOrder = SaleOrder::findOrFail($sale_order_id);

        $request->validate([
            'number' => 'required|max:255|unique:sale_orders,number,' . $saleOrder->id,
            'date' => 'required|date',
            'requestor_id' => 'required',
            'delivery_to' => 'nullable|max:255',
            'total_price' => 'required|numeric',
        ]);

        $saleOrder->number = $request->input('number');
        $saleOrder->date = $request->input('date');
        $saleOrder->requestor_id = $request->input('requestor_id');
        $saleOrder->deliver_to = $request->input('deliver_to');
        $saleOrder->total_price = $request->input('total_price');
        $saleOrder->save();

        $work = $saleOrder->work;
        $work->sale_order_number = $saleOrder->number;
        $work->sale_order_date = $saleOrder->date;
        $work->sale_order_total_price = $saleOrder->total_price;
        $work->save();

        // Update Deliver Note
        if ($work->quotations) {
            $quotations = $work->quotations;
            foreach ($quotations as $quotation) {
                foreach ($quotation->quotation_lines as $line) {
                    $line->delivery_note->sale_order_number = $saleOrder->number;
                    $line->delivery_note->save();
                }
            }
        }

        return response()->json([
            "result" => "success",
            "message" => "New PO registered successfully.",
            "saleOrder" => $saleOrder,
            "work" => $work,
        ]);
    }
}
