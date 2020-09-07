<?php

namespace App\Http\Controllers\Api;

use App\Model\People;
use App\Model\Admin\Country;
use App\Model\Admin\Timezone;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PeopleController extends Controller
{
    public function getEmployees($model, $model_id)
    {
        $model = "App\\Model\\" . $model;
        $object = $model::findOrFail($model_id);
        $employees = $object->employees;
        $timezones = timezone_identifiers_list();

        return response()->json([
            "employees" => $employees,
            "timezones" => $timezones
        ]);
    }

    public function saveEmployee(Request $request, $model, $model_id)
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

        $model = "App\\Model\\" . $model;
        $object = $model::findOrFail($model_id);

        $employee = new People;
        $employee->title = $request->title;
        $employee->name = $request->name;
        $employee->gender = $request->gender;
        $employee->date_of_birth = $request->date_of_birth;
        $employee->position = $request->position;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->mobile = $request->mobile;
        $employee->fax = $request->fax;
        $employee->timezone = $request->timezone;
        $employee->description = $request->description;
        $employee->is_active = $request->is_active;

        $object->employees()->save($employee);

        return response()->json([
            "result" => "success",
            "message" => "Employee has been added successfully.",
            "employee" => $employee
        ]);
    }

    public function updateEmployee(Request $request, $employee_id)
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

        $employee = People::findOrFail($employee_id);

        $employee->title = $request->title;
        $employee->name = $request->name;
        $employee->gender = $request->gender;
        $employee->date_of_birth = $request->date_of_birth;
        $employee->position = $request->position;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->mobile = $request->mobile;
        $employee->fax = $request->fax;
        $employee->timezone = $request->timezone;
        $employee->description = $request->description;
        $employee->is_active = $request->is_active;
        $employee->save();

        return response()->json([
            "result" => "success",
            "message" => "Employee has been updated successfully.",
            "employee" => $employee
        ]);
    }
}
