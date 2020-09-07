<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\PaymentMethod;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentMethodController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $payment_method = new PaymentMethod;
        $payment_method->name = $request->name;
        $payment_method->display_name = $request->display_name;
        $payment_method->description = $request->description;
        $payment_method->is_active = $request->is_active;
        $payment_method->save();

        return response()->json([
            "result" => "success",
            "data" => $payment_method,
            "message" => "New payment Method has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $payment_method = PaymentMethod::findOrFail($id);
        $payment_method->name = $request->name;
        $payment_method->display_name = $request->display_name;
        $payment_method->description = $request->description;
        $payment_method->is_active = $request->is_active;
        $payment_method->save();

        return response()->json([
            "result" => "success",
            "data" => $payment_method,
            "message" => "Payment Method has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $payment_method = PaymentMethod::findOrFail($id);
        $payment_method->delete();

        return response()->json([
            "result" => "success",
            "message" => "Payment Method has been successfully deleted",
            "data" => $payment_method
        ]);
    }
}
