<?php

namespace App\Http\Controllers\Api;

use App\Model\SupplierBankAccount;
use App\Model\Supplier;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SupplierBankAccountController extends Controller
{
    public function index($supplier_id) 
    {
        $supplier = Supplier::findOrFail($supplier_id);
        $banks = $supplier->supplier_bank_accounts;

        return response()->json([
            "banks" => $banks,
        ]);
        
    }

    public function store(Request $request, $supplier_id)
    {
        $request->validate([
            'name' => 'required|max:50',
            'display_name' => 'required|max:50',
            'bank_name' => 'required|max:50',
            'account_owner' => 'required|max:50',
            'account_number' => 'required|max:50',
        ]);

        $bank = new SupplierBankAccount;

        $bank->name = $request->name;
        $bank->display_name = $request->display_name;
        $bank->bank_name = $request->bank_name;
        $bank->account_number = $request->account_number;
        $bank->account_owner = $request->account_owner;
        $bank->supplier_id = $request->supplier_id;
        $bank->description = $request->description;
        $bank->is_active = $request->is_active;
        $bank->save();

        return response()->json([
            "bank" => $bank,
            "result" => "success",
            "message" => "New Supplir bank account has been created successfully.",
        ]);
    }

    public function update(Request $request, $supplier_bank_acount_id)
    {
        $request->validate([
            'name' => 'required|max:50',
            'display_name' => 'required|max:50',
            'bank_name' => 'required|max:50',
            'account_owner' => 'required|max:50',
            'account_number' => 'required|max:50',
        ]);

        $bank = SupplierBankAccount::findOrFail($supplier_bank_acount_id);
        
        $bank->name = $request->name;
        $bank->display_name = $request->display_name;
        $bank->bank_name = $request->bank_name;
        $bank->account_number = $request->account_number;
        $bank->account_owner = $request->account_owner;
        $bank->description = $request->description;
        $bank->is_active = $request->is_active;
        $bank->save();

        return response()->json([
            "bank" => $bank,
            "result" => "success",
            "message" => "New Supplir bank account has been updated successfully.",
        ]);
    }
}
