<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\Branch;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BranchController extends Controller
{
    public function store(Request $request)
    {
        // return $request->all();
        $request->validate([
            'name' => 'required|max:50',
            'display_name' => 'required:max:50',
            'email' => 'required|email',
            'kor_address' => 'required:max:255',
            'code' => 'required|alpha_num|max:10|unique:branches,code',
        ]);

        $branch = new Branch;
        $branch->name = $request->name;
        $branch->kor_name = $request->kor_name;
        $branch->display_name = $request->display_name;
        $branch->street1 = $request->street1;
        $branch->street2 = $request->street2;
        $branch->city = $request->city;
        $branch->state = $request->state;
        $branch->country = $request->country;
        $branch->kor_address = $request->kor_address;
        $branch->zipcode = $request->zipcode;
        $branch->phone = $request->phone;
        $branch->fax = $request->fax;
        $branch->reg_number = $request->reg_number;
        $branch->vat_reg_number = $request->vat_reg_number;
        $branch->email = $request->email;
        $branch->code = $request->code;
        $branch->is_active = $request->is_active;
        $branch->save();

        return response()->json([
            "result" => "success",
            "data" => $branch,
            "message" => "New IES branch has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $branch = Branch::findOrFail($id);

        $request->validate([
            'name' => 'required|max:50',
            'display_name' => 'required:max:50',
            'email' => 'required|email',
            'code' => 'required|alpha_num|max:10|unique:branches,code,' . $branch->id,
        ]);

        $branch->name = $request->name;
        $branch->kor_name = $request->kor_name;
        $branch->display_name = $request->display_name;
        $branch->street1 = $request->street1;
        $branch->street2 = $request->street2;
        $branch->city = $request->city;
        $branch->state = $request->state;
        $branch->country = $request->country;
        $branch->kor_address = $request->kor_address;
        $branch->zipcode = $request->zipcode;
        $branch->phone = $request->phone;
        $branch->fax = $request->fax;
        $branch->vat_reg_number = $request->vat_reg_number;
        $branch->email = $request->email;
        $branch->code = $request->code;
        $branch->is_active = $request->is_active;
        $branch->save();

        return response()->json([
            "result" => "success",
            "data" => $branch,
            "message" => "IES branch has been successfully updated"
        ]);
    }
    public function destroy($id)
    {
        $branch = Branch::findOrFail($id);
        $branch->delete();

        return response()->json([
            "result" => "success",
            "message" => "Ies branch has been successfully deleted",
            "data" => $branch
        ]);
    }
}
