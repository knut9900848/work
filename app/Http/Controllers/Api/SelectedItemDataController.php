<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Admin\Department;
use App\Model\Admin\Position;

class SelectedItemDataController extends Controller
{
    public function getEmployee()
    {

    }

    public function getEmployeeEmail()
    {

    }

    public function getDepartment($branch_id)
    {
        $departments = Department::where('branch_id', $branch_id)->get();
        return response()->json([
            "departments" => $departments,
        ]);
    }

    public function getPosition($department_id)
    {
        $positions = Position::where('department_id', $department_id)->get();
        return response()->json([
            "positions" => $positions,
        ]);
    }
}
