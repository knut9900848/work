<?php

namespace App\Http\Controllers\Api;

use App\Model\QuotationOption;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QuotationOptionController extends Controller
{
    public function store(Request $request, $quotation_id)
    {
        $option = new QuotationOption;
        $option->title = $request->title;
        $option->discount = $request->discount;
        $option->shipping_fee = $request->is_use_shipping_fee;
        $option->is_use_tax = $request->is_use_tax;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->is_use_description = $request->is_use_description;
        $option->quotation_id = $quotation_id;
        $option->save();

        return response()->json([
            "option" => $option,
        ]);
    }

    public function update(Request $request, $quotation_id, $option_id)
    {
        $option = QuotationOption::findOrFail($request->option_id);
        $option->title = $request->title;
        $option->discount = $request->discount;
        $option->shipping_fee = $request->shipping_fee;
        $option->is_use_tax = $request->is_use_tax;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->is_use_description = $request->is_use_description;
        $option->save();

        return response()->json([
            "result"  => "success",
            "message" => "Option has been updated successfully.",
            "option" => $option,
        ]);
    }
}
