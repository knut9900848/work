<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\DeliveryTerms;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DeliveryTermsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $delivery_terms = new DeliveryTerms;
        $delivery_terms->name = $request->name;
        $delivery_terms->display_name = $request->display_name;
        $delivery_terms->description = $request->description;
        $delivery_terms->is_active = $request->is_active;
        $delivery_terms->save();

        return response()->json([
            "result" => "success",
            "data" => $delivery_terms,
            "message" => "New Delivery Terms has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $delivery_terms = DeliveryTerms::findOrFail($id);
        $delivery_terms->name = $request->name;
        $delivery_terms->display_name = $request->display_name;
        $delivery_terms->description = $request->description;
        $delivery_terms->is_active = $request->is_active;
        $delivery_terms->save();

        return response()->json([
            "result" => "success",
            "data" => $delivery_terms,
            "message" => "Delivery Terms has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $delivery_terms = DeliveryTerms::findOrFail($id);
        $delivery_terms->delete();

        return response()->json([
            "result" => "success",
            "message" => "Delivery Terms has been successfully deleted",
            "data" => $delivery_terms
        ]);
    }
}
