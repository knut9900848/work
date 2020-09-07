<?php

namespace App\Http\Controllers\Api;

use App\Model\SaleOrderOption;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SaleOrderOptionController extends Controller
{
    public function store(Request $request, $sale_order_id)
    {
        $option = new SaleOrderOption;
        $option->title = $request->title;
        $option->discount = $request->discount;
        $option->shipping_fee = $request->shipping_fee;
        $option->is_use_tax = $request->is_use_tax;
        $option->pdf_form_type = $request->input('pdf_form_type', 'default');
        $option->sale_order_id = $sale_order_id;
        $option->save();

        return response()->json([
            "option" => $option,
        ]);
    }

    public function update(Request $request, $sale_order_id, $option_id)
    {
        $option = SaleOrderOption::findOrFail($request->option_id);
        $option->title = $request->title;
        $option->discount = $request->discount;
        $option->shipping_fee = $request->shipping_fee;
        $option->is_use_tax = $request->is_use_tax;
        $option->pdf_form_type = $request->pdf_form_type;
        $option->save();

        return response()->json([
            "result"  => "success",
            "message" => "Option has been updated successfully.",
            "option" => $option,
        ]);
    }
}
