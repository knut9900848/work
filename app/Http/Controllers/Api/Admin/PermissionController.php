<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::orderBy('name', 'desc')->get();

        return response()->json(
            [
                "permissions" => $permissions
            ]
        );
    }

    public function store(Request $request)
    {
        $permission = new Permission;
        $permission->name = $request->name;
        $permission->guard_name = $request->guard_name;
        $permission->save();

        return response()->json([
            "result" => "success",
            "message" => "Permission has been created",
            "permission" => $permission
        ]);
    }

    public function update(Request $request, $permission_id)
    {
        $permission = Permission::findOrFail($permission_id);
        $permission->name = $request->name;
        $permission->guard_name = $request->guard_name;
        $permission->save();

        return response()->json([
            "result" => "success",
            "message" => "Permission has been updated",
            "permission" => $permission
        ]);
    }
}
