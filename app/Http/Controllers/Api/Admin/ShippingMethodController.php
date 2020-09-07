<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\ShippingMethod;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShippingMethodController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $shipping_method = new ShippingMethod;
        $shipping_method->name = $request->name;
        $shipping_method->display_name = $request->display_name;
        $shipping_method->description = $request->description;
        $shipping_method->is_active = $request->is_active;
        $shipping_method->save();

        return response()->json([
            "result" => "success",
            "data" => $shipping_method,
            "message" => "New Shipping Type has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $shipping_method = ShippingMethod::findOrFail($id);
        $shipping_method->name = $request->name;
        $shipping_method->display_name = $request->display_name;
        $shipping_method->description = $request->description;
        $shipping_method->is_active = $request->is_active;
        $shipping_method->save();

        return response()->json([
            "result" => "success",
            "data" => $shipping_method,
            "message" => "Shipping Type has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $shipping_method = ShippingMethod::findOrFail($id);
        $shipping_method->delete();

        return response()->json([
            "result" => "success",
            "message" => "Shipping Type has been successfully deleted",
            "data" => $shipping_method
        ]);
    }
}
