<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\PaymentTerms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentTermsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'terms' => 'required|numeric|between:0, 365',
        ]);

        $payment_terms = new PaymentTerms;
        $payment_terms->name = $request->name;
        $payment_terms->display_name = $request->display_name;
        $payment_terms->terms = $request->terms;
        $payment_terms->in_days = $request->in_days;
        $payment_terms->discount = $request->discount;
        $payment_terms->description = $request->description;
        $payment_terms->is_active = $request->is_active;
        $payment_terms->save();

        return response()->json([
            "result" => "success",
            "data" => $payment_terms,
            "message" => "New Payment Terms has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'terms' => 'required|numeric|between:0, 365',
        ]);

        $payment_terms = PaymentTerms::findOrFail($id);
        $payment_terms->name = $request->name;
        $payment_terms->display_name = $request->display_name;
        $payment_terms->terms = $request->terms;
        $payment_terms->in_days = $request->in_days;
        $payment_terms->discount = $request->discount;
        $payment_terms->description = $request->description;
        $payment_terms->is_active = $request->is_active;
        $payment_terms->save();

        return response()->json([
            "result" => "success",
            "data" => $payment_terms,
            "message" => "Payment Terms has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $payment_terms = PaymentTerms::findOrFail($id);
        $payment_terms->delete();

        return response()->json([
            "result" => "success",
            "message" => "Payment Terms has been successfully deleted",
            "data" => $payment_terms
        ]);
    }
}
