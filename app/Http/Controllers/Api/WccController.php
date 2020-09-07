<?php

namespace App\Http\Controllers\api;

use App\Model\Wcc;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WccController extends Controller
{
    public function index($work_id)
    { }

    public function store(Request $request)
    {
        $request->validate([
            'approver_id' => 'required|numeric',
            'work_id' => 'required|numeric',
            'date' => 'required|date'
        ]);

        $wcc = new Wcc;
        $wcc->approver_id = $request->input('approver_id');
        $wcc->work_id = $request->input('work_id');
        $wcc->date = $request->input('date');
        $wcc->save();

        $work = $wcc->work;
        $work->wcc_date = $wcc->date;
        $work->phase = "APPRVD WCC";
        $work->save();

        return response()->json([
            "result" => "success",
            "message" => "WCC has input successfully.",
            "wcc" => $wcc,
            "work" => $work,
        ]);
    }

    public function show($wcc_id)
    {
        $wcc = Wcc::findOrFail($wcc_id);
        $approvers = $wcc->work->company->employees;
        $attachments = $wcc->attachments;

        return response()->json([
            "wcc" => $wcc,
            "approvers" => $approvers,
            "attachments" => $attachments,
        ]);
    }

    public function update(Request $request, $wcc_id)
    {
        $request->validate([
            'approver_id' => 'required|numeric',
            'work_id' => 'required|numeric',
            'date' => 'required|date'
        ]);

        $wcc = Wcc::findOrFail($wcc_id);
        $wcc->approver_id = $request->input('approver_id');
        $wcc->work_id = $request->input('work_id');
        $wcc->date = $request->input('date');
        $wcc->save();

        $work = $wcc->work;
        $work->wcc_date = $wcc->date;
        $work->save();

        return response()->json([
            "result" => "success",
            "message" => "WCC has updated successfully.",
            "wcc" => $wcc,
            "work" => $work,
        ]);
    }
}
