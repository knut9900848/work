<?php

namespace App\Http\Controllers\Api;

use App\Model\SupplierEmployee;
use App\Model\Supplier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SupplierEmployeeController extends Controller
{
    public function index($supplier_id)
    {
        $employees = SupplierEmployee::where('supplier_id', $supplier_id)->get();

        return response()->json([
            "employees" => $employees,
        ]);
    }

    public function  store(Request $request, $supplier_id)
    {
        $request->validate([
            'title' => 'required',
            'name' => 'required|max:50',
            'position' => 'max:50',
            'phone' => 'max:50',
            'mobile' => 'max:50',
            'faix' => 'max:50',
            'email' => 'required|max:50|email',
            'description' => 'max:255',
        ]);

        // $supplier = Supplier::findOrFail($supplier_id);

        $supplierEmployee = new SupplierEmployee;
        $supplierEmployee->title = $request->title;
        $supplierEmployee->name = $request->name;
        $supplierEmployee->position = $request->position;
        $supplierEmployee->phone = $request->phone;
        $supplierEmployee->mobile = $request->mobile;
        $supplierEmployee->email = $request->email;
        $supplierEmployee->fax = $request->fax;
        $supplierEmployee->description = $request->description;
        $supplierEmployee->is_active = $request->is_active;
        $supplierEmployee->supplier_id = $supplier_id;
        $supplierEmployee->save();

        return response()->json([
            "result" => "success",
            "message" => "Employee has been added successfully.",
            "supplierEmployee" => $supplierEmployee
        ]);

    }

    public function update(Request $request, $supplier_id, $employee_id)
    {
        $request->validate([
            'name' => 'required|max:50',
            'position' => 'max:50',
            'phone' => 'max:50',
            'mobile' => 'max:50',
            'faix' => 'max:50',
            'email' => 'required|max:50|email',
            'description' => 'max:255',
        ]);

        // $supplier = Supplier::findOrFail($supplier_id);

        $supplierEmployee = SupplierEmployee::findOrFail($employee_id);
        $supplierEmployee->title = $request->title;
        $supplierEmployee->name = $request->name;
        $supplierEmployee->position = $request->position;
        $supplierEmployee->phone = $request->phone;
        $supplierEmployee->mobile = $request->mobile;
        $supplierEmployee->email = $request->email;
        $supplierEmployee->fax = $request->fax;
        $supplierEmployee->description = $request->description;
        $supplierEmployee->is_active = $request->is_active;
        $supplierEmployee->supplier_id = $supplier_id;
        $supplierEmployee->save();

        return response()->json([
            "result" => "success",
            "message" => "Employee has been updated successfully.",
            "supplierEmployee" => $supplierEmployee
        ]);
    }
}
