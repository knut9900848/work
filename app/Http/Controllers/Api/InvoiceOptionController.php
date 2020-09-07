<?php

namespace App\Http\Controllers\Api;

use App\Model\InvoiceOption;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceOptionController extends Controller
{
    public function store(Request $request, $invoice_id)
    {
        $option = new InvoiceOption;
        $option->is_use_tax = $request->is_use_tax;
        $option->discount = $request->discount;
        $option->shipping_fee = $request->shipping_fee;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->invoice_id = $invoice_id;
        $option->save();

        return response()->json([
            "option" => $option,
        ]);
    }

    public function update(Request $request, $invoice_id, $option_id)
    {
        $option = InvoiceOption::findOrFail($request->option_id);
        $option->is_use_tax = $request->is_use_tax;
        $option->discount = $request->discount;
        $option->shipping_fee = $request->shipping_fee;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->save();

        return response()->json([
            "result"  => "success",
            "message" => "Option has been updated successfully.",
            "option" => $option,
        ]);
    }
}
