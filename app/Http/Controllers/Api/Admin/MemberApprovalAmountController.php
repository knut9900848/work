<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\MemberApprovalAmount;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class MemberApprovalAmountController extends Controller
{
    public function index($member_id)
    {
        $member = User::findOrFail($member_id);
        $memberApprovalAmounts = $member->member_approval_amounts;

        return response()->json([
            "memberApprovalAmounts" => $memberApprovalAmounts
        ]);
    }

    public function store(Request $request, $member_id)
    {
        $memberApprovalAmount = new MemberApprovalAmount;
        $memberApprovalAmount->name = $request->name;
        $memberApprovalAmount->display_name = $request->display_name;
        $memberApprovalAmount->amount = $request->amount;
        $memberApprovalAmount->user_id = $request->member_id;
        $memberApprovalAmount->description = $request->description;
        $memberApprovalAmount->save();

        return response()->json([
            "result" => "success",
            "message" => "New Approval Amount has creted successfully.",
            "memberApprovalAmount" => $memberApprovalAmount,
        ]);
    }

    public function show($member_id, $approval_id)
    { }

    public function update(Request $request, $member_id, $approval_id)
    {
        $memberApprovalAmount = MemberApprovalAmount::findOrFail($approval_id);
        $memberApprovalAmount->name = $request->name;
        $memberApprovalAmount->display_name = $request->display_name;
        $memberApprovalAmount->amount = $request->amount;
        $memberApprovalAmount->user_id = $request->member_id;
        $memberApprovalAmount->description = $request->description;
        $memberApprovalAmount->save();

        return response()->json([
            "result" => "success",
            "message" => "New Approval Amount has updated successfully.",
            "memberApprovalAmount" => $memberApprovalAmount,
        ]);
    }
}
