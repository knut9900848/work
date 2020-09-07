<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\Bank;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BankController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'account_number' => 'required|max:30',
        ]);

        $bank = new Bank;
        $bank->name = $request->name;
        $bank->display_name = $request->display_name;
        $bank->account_number = $request->account_number;
        $bank->swift_code = $request->swift_code;
        $bank->address = $request->address;
        $bank->description = $request->description;
        $bank->is_active = $request->is_active;
        $bank->save();

        return response()->json([
            "result" => "success",
            "data" => $bank,
            "message" => "New Bank has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'account_number' => 'required|max:30',
        ]);

        $bank = Bank::findOrFail($id);
        $bank->name = $request->name;
        $bank->display_name = $request->display_name;
        $bank->account_number = $request->account_number;
        $bank->swift_code = $request->swift_code;
        $bank->address = $request->address;
        $bank->description = $request->description;
        $bank->is_active = $request->is_active;
        $bank->save();

        return response()->json([
            "result" => "success",
            "data" => $bank,
            "message" => "Bank has been successfully updated"
        ]);
    }
    public function destroy($id) {
        $bank = Bank::findOrFail($id);
        $bank->delete();

        return response()->json([
            "result" => "success",
            "message" => "Bank has been successfully deleted",
            "data" => $bank
        ]);
    }
}
