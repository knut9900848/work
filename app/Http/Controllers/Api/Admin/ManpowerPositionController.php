<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\ManpowerPosition;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ManpowerPositionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'code' => 'required|alpha_num|max:10|unique:manpower_positions,code',
            'manpower_discipline_id' => 'required|numeric'
        ]);

        $manpower_position = new ManpowerPosition;
        $manpower_position->name = $request->name;
        $manpower_position->display_name = $request->display_name;
        $manpower_position->code = $request->code;
        $manpower_position->description = $request->description;
        $manpower_position->is_active = $request->is_active;
        $manpower_position->manpower_discipline_id = $request->manpower_discipline_id;
        $manpower_position->save();

        return response()->json([
            "result" => "success",
            "data" => $manpower_position,
            "message" => "New manpower position has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $manpower_position = ManpowerPosition::findOrFail($id);

        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'code' => 'required|alpha_num|max:10|unique:manpower_positions,code,' . $manpower_position->id,
            'manpower_discipline_id' => 'required|numeric'
        ]);

        $manpower_position = ManpowerPosition::findOrFail($id);
        $manpower_position->name = $request->name;
        $manpower_position->display_name = $request->display_name;
        $manpower_position->code = $request->code;
        $manpower_position->description = $request->description;
        $manpower_position->is_active = $request->is_active;
        $manpower_position->manpower_discipline_id = $request->manpower_discipline_id;
        $manpower_position->save();

        return response()->json([
            "result" => "success",
            "data" => $manpower_position,
            "message" => "Manpower position has been successfully updated"
        ]);
    }
    public function destroy($id)
    {
        $manpower_position = ManpowerPosition::findOrFail($id);
        $manpower_position->delete();

        return response()->json([
            "result" => "success",
            "message" => "Manpower position has been successfully deleted",
            "data" => $manpower_position
        ]);
    }
}
