<?php

namespace App\Http\Controllers\Api;

use App\Model\Supplier;
use App\Model\Admin\Country;
use App\Model\Address;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SupplierController extends Controller
{

    public function index()
    {
        $suppliers = Supplier::orderBy('id', 'desc')->get();
        $countries = Country::all();

        return response()->json([
            "suppliers" => $suppliers,
            'countries' => $countries,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'display_name' => 'required|string|max:255',
            'code' => 'required|alpha_num|max:10:unique:suppliers,code',
        ]);

        $supplier = new Supplier;
        $supplier->name = $request->name;
        $supplier->display_name = $request->display_name;
        $supplier->email = $request->email;
        $supplier->phone = $request->phone;
        $supplier->fax = $request->fax;
        $supplier->url = $request->url;
        $supplier->reg_number = $request->reg_number;
        $supplier->code = strtoupper($request->code);
        $supplier->description = $request->description;
        $supplier->is_active = $request->is_active;
        $supplier->save();

        $supplierAddress = new Address;
        $supplierAddress->name = $supplier->name;
        $supplierAddress->addressable_type = "App\\Model\\Supplier";
        $supplierAddress->addressable_id = $supplier->id;
        $supplierAddress->save();

        return response()->json([
            "result" => "success",
            "message" => "Supplier has been registered successfully.",
            "supplier" => $supplier,
        ]);
    }

    public function update(Request $request, $id)
    {
        $supplier = Supplier::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'display_name' => 'required|string|max:255',
            'code' => 'required|alpha_num|max:10|unique:suppliers,code,' . $supplier->id,
        ]);

        $supplier->name = $request->name;
        $supplier->display_name = $request->display_name;
        $supplier->email = $request->email;
        $supplier->phone = $request->phone;
        $supplier->fax = $request->fax;
        $supplier->url = $request->url;
        $supplier->reg_number = $request->reg_number;
        $supplier->code = strtoupper($request->code);
        $supplier->description = $request->description;
        $supplier->is_active = $request->is_active;
        $supplier->save();

        return response()->json([
            "result" => "success",
            "message" => "Supplier has been updated successfully.",
            "supplier" => $supplier,
        ]);
    }
}
