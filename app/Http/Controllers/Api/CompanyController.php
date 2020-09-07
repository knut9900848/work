<?php

namespace App\Http\Controllers\Api;

use App\Model\Company;
use App\Model\Address;
use App\Model\Admin\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CompanyController extends Controller
{

    public function index()
    {
        $companies = Company::orderBy('id', 'desc')->get();
        $countries = Country::all();

        return response()->json([
            "companies" => $companies,
            "countries" => $countries,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'display_name' => 'required|string|max:255',
            'code' => 'required|alpha_num|max:10:unique:companies,code',
        ]);

        $company = new Company;
        $company->name = $request->name;
        $company->display_name = $request->display_name;
        $company->email = $request->email;
        $company->phone = $request->phone;
        $company->fax = $request->fax;
        $company->url = $request->url;
        $company->vat_reg_number = $request->vat_reg_number;
        $company->reg_number = $request->reg_number;
        $company->code = strtoupper($request->code);
        $company->description = $request->description;
        $company->is_active = $request->is_active;
        $company->save();

        $companyAddress = new Address;
        $companyAddress->name = $company->name;
        $companyAddress->addressable_type = "App\\Model\\Company";
        $companyAddress->addressable_id = $company->id;
        $companyAddress->save();

        return response()->json([
            "result" => "success",
            "message" => "Company has been registered successfully.",
            "company" => $company,
        ]);
    }

    public function update(Request $request, $id)
    {
        $company = Company::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'display_name' => 'required|string|max:255',
            'code' => 'required|alpha_num|max:10|unique:companies,code,' . $company->id,
        ]);

        $company->name = $request->name;
        $company->display_name = $request->display_name;
        $company->email = $request->email;
        $company->phone = $request->phone;
        $company->fax = $request->fax;
        $company->url = $request->url;
        $company->vat_reg_number = $request->vat_reg_number;
        $company->reg_number = $request->reg_number;
        $company->code = strtoupper($request->code);
        $company->description = $request->description;
        $company->is_active = $request->is_active;
        $company->save();

        return response()->json([
            "result" => "success",
            "message" => "Company has been updated successfully.",
            "company" => $company,
        ]);
    }
}
