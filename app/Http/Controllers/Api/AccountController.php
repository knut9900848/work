<?php

namespace App\Http\Controllers\Api;

use App\Model\Member;
use Hash;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AccountController extends Controller
{
    public function getAccountInfo()
    {
        $member = auth()->user();

        return response()->json([
            "account" => $member,
        ]);
    }

    public function updateAccountInfo(Request $request)
    {
        $member = auth()->user();

        $request->validate([
            'name' => 'required|string|max:255',
            'kor_name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
        ]);

        if (!empty($request->password)) {
            $request->validate([
                'password' => 'required|string|min:6|confirmed',
                'password_confirmation' => 'required'
            ]);
        }

        if (!empty($request->password)) {
            $member->password = Hash::make($request->password);
        }
        $member->name = $request->name;
        $member->kor_name = $request->kor_name;
        $member->position = $request->position;
        $member->kor_position = $request->kor_position;
        $member->phone = $request->phone;
        $member->mobile = $request->mobile;
        $member->save();

        return response()->json([
            "account" => $member,
            "result" => "success",
            "message" => "Your Account has updated successfully."
        ]);
    }
}
