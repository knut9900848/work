<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\ManpowerDiscipline;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ManpowerDisciplineController extends Controller
{
    public function index()
    {
        $manpower_disciplines = ManpowerDiscipline::all();
        return response()->json([
            "data" => $manpower_disciplines
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'code' => 'required|alpha_num|max:10|unique:manpower_disciplines,code'
        ]);

        $manpower_discipline = new ManpowerDiscipline;
        $manpower_discipline->name = $request->name;
        $manpower_discipline->display_name = $request->display_name;
        $manpower_discipline->code = $request->code;
        $manpower_discipline->description = $request->description;
        $manpower_discipline->is_active = $request->is_active;
        $manpower_discipline->save();

        return response()->json([
            "result" => "success",
            "data" => $manpower_discipline,
            "message" => "New manpower Discipline has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $manpower_discipline = ManpowerDiscipline::findOrFail($id);

        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'code' => 'required|alpha_num|max:10|unique:manpower_disciplines,code,' . $manpower_discipline->id
        ]);

        $manpower_discipline->name = $request->name;
        $manpower_discipline->display_name = $request->display_name;
        $manpower_discipline->code = $request->code;
        $manpower_discipline->description = $request->description;
        $manpower_discipline->is_active = $request->is_active;
        $manpower_discipline->save();

        return response()->json([
            "result" => "success",
            "data" => $manpower_discipline,
            "message" => "Manpower Discipline has been successfully updated"
        ]);
    }
    public function destroy($id)
    {
        $manpower_discipline = ManpowerDiscipline::findOrFail($id);
        $manpower_discipline->delete();

        return response()->json([
            "result" => "success",
            "message" => "Manpower Discipline has been successfully deleted",
            "data" => $manpower_discipline
        ]);
    }
}
