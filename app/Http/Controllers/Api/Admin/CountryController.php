<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::all();
        return response()->json([
            "data" => $countries
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'code' => 'required|alpha_num|max:10|unique:countries,code'
        ]);

        $country = new Country;
        $country->name = $request->name;
        $country->display_name = $request->display_name;
        $country->code = $request->code;
        $country->is_active = $request->is_active;
        $country->save();

        return response()->json([
            "result" => "success",
            "data" => $country,
            "message" => "New Country has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $country = Country::findOrFail($id);

        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'code' => 'required|alpha_num|max:10|unique:countries,code,' . $country->id
        ]);

        $country->name = $request->name;
        $country->display_name = $request->display_name;
        $country->code = $request->code;
        $country->is_active = $request->is_active;
        $country->save();

        return response()->json([
            "result" => "success",
            "data" => $country,
            "message" => "Country has been successfully updated"
        ]);
    }
    public function destroy($id)
    {
        $country = Country::findOrFail($id);
        $country->delete();

        return response()->json([
            "result" => "success",
            "message" => "Country has been successfully deleted",
            "data" => $country
        ]);
    }
}
