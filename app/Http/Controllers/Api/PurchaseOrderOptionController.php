<?php

namespace App\Http\Controllers\Api;

use App\Model\PurchaseOrderOption;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PurchaseOrderOptionController extends Controller
{
    public function store(Request $request, $purchase_order_id)
    {
        $option = new PurchaseOrderOption;
        $option->title = $request->title;
        $option->discount = $request->discount;
        $option->is_use_tax = $request->is_use_tax;
        $option->shipping_fee = $request->shipping_fee;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->purchase_order_terms_and_conditions_id = $request->purchase_order_terms_and_conditions_id;
        $option->purchase_order_id = $purchase_order_id;
        $option->save();

        return response()->json([
            "result"  => "success",
            "message" => "Option has been stored successfully.",
            "option" => $option,
        ]);
    }

    public function update(Request $request, $purchase_order_id, $option_id)
    {
        $option = PurchaseOrderOption::findOrFail($request->option_id);
        $option->title = $request->title;
        $option->discount = $request->discount;
        $option->is_use_tax = $request->is_use_tax;
        $option->shipping_fee = $request->shipping_fee;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->purchase_order_terms_and_conditions_id = $request->purchase_order_terms_and_conditions_id;
        $option->save();

        return response()->json([
            "result"  => "success",
            "message" => "Option has been updated successfully.",
            "option" => $option,
        ]);
    }
}
