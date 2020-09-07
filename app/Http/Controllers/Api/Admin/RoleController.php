<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function index()
    {
        // $roles = Role::all();
        $roles = Role::with('permissions')->get();
        $permissions = Permission::all();

        return response()->json([
            "roles" => $roles,
            "permissions" => $permissions
        ]);
    }

    public function store(Request $request)
    {
        $role = new Role;
        $role->name = $request->name;
        $role->guard_name = $request->guard_name;
        $role->save();

        return response()->json([
            "result" => "success",
            "message" => "New Role has added successfully",
            "role" => $role,
        ]);
    }

    public function getPermissions($id)
    {
        $role = Role::find($id);
        $permissions = $role->permissions->pluck('name');

        return response()->json([
            "permissions" => $permissions
        ]);
    }

    public function asyncRole(Request $request, $id)
    {
        $role = Role::findOrFail($id);
        $role->syncPermissions($request->permissions);

        return response()->json([
            "result" => "success",
            "message" => "Permission has been assigned to Role successfully.",
            "permissions" => $role->permissions
        ]);
    }
}

// {role: 'admin', permissions: {}}
