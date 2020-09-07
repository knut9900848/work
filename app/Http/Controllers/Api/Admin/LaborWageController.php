<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\LaborWage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LaborWageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'multiple' => 'required|numeric|max:5',
            'from' => 'required',
            'to' => 'required'
        ]);

        $labor_wages = new LaborWage;
        $labor_wages->name = $request->name;
        $labor_wages->display_name = $request->display_name;
        $labor_wages->multiple = $request->multiple;
        $labor_wages->from = $request->from;
        $labor_wages->to = $request->to;
        $labor_wages->description = $request->description;
        $labor_wages->is_active = $request->is_active;
        $labor_wages->save();

        return response()->json([
            "result" => "success",
            "data" => $labor_wages,
            "message" => "New Labor Wage has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'multiple' => 'required|numeric|max:5',
            'from' => 'required',
            'to' => 'required'
        ]);

        $labor_wages = LaborWage::findOrFail($id);
        $labor_wages->name = $request->name;
        $labor_wages->display_name = $request->display_name;
        $labor_wages->multiple = $request->multiple;
        $labor_wages->from = $request->from;
        $labor_wages->to = $request->to;
        $labor_wages->description = $request->description;
        $labor_wages->is_active = $request->is_active;
        $labor_wages->save();

        return response()->json([
            "result" => "success",
            "data" => $labor_wages,
            "message" => "Labor Wage has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $labor_wages = LaborWage::findOrFail($id);
        $labor_wages->delete();

        return response()->json([
            "result" => "success",
            "message" => "Labor Wage has been successfully deleted",
            "data" => $labor_wages
        ]);
    }
}
