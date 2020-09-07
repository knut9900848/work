<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\Unit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UnitController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $unit = new Unit;
        $unit->name = $request->name;
        $unit->display_name = $request->display_name;
        $unit->description = $request->description;
        $unit->is_active = $request->is_active;
        $unit->save();

        return response()->json([
            "result" => "success",
            "data" => $unit,
            "message" => "New Unit has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
        ]);

        $unit = Unit::findOrFail($id);
        $unit->name = $request->name;
        $unit->display_name = $request->display_name;
        $unit->description = $request->description;
        $unit->is_active = $request->is_active;
        $unit->save();

        return response()->json([
            "result" => "success",
            "data" => $unit,
            "message" => "Unit has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $unit = Unit::findOrFail($id);
        $unit->delete();

        return response()->json([
            "result" => "success",
            "message" => "Unit has been successfully deleted",
            "data" => $unit
        ]);
    }
}
