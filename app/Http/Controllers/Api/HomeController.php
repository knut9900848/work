<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class HomeController extends Controller
{
    public function __construct()
    { }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        auth()->attempt($request->only(['email', 'password']));
        $user = auth()->user();

        if ($user) {
            $permissions = $user->getAllPermissions()->pluck('name');
            $roles = $user->getRoleNames()->pluck('name');

            return response()->json([
                "result" => "success",
                "message" => "Welcome " . $user->name,
                "user" => $user,
                "permissions" => $permissions,
                "roles" => $roles
            ]);
        }

        return response()->json([
            "result" => "fail",
            "message" => "Failed. Please check your credential.",
        ]);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json([
            "result" => "success"
        ]);
    }

    public function getUser(Request $request)
    {
        $user = $request->user();
        $roles = $user->getRoleNames()->pluck('name');
        $permissions = $user->getAllPermissions()->pluck('name');
        return response()->json([
            'user' => $user,
            'roles' => $roles,
            'permissions' => $permissions,
        ]);
    }

    public function setDefaultPermission()
    {
        $permission = Permission::create(['name' => 'edit-work', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-quotation', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-purchase-order', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-invoice', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-payment', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-delivery-note', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-company', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-project', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-supplier', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-member', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-role', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-permission', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-default-data', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'edit-account-transaction', 'guard_name' => 'api']);

        $permission = Permission::create(['name' => 'access-work', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-quotation', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-purchase-order', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-invoice', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-payment', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-delivery-note', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-company', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-project', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-supplier', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-member', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-role', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-permission', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-default-data', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'access-account-transaction', 'guard_name' => 'api']);

        $permission = Permission::create(['name' => 'approve-quotation', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'approve-purchase-order', 'guard_name' => 'api']);
        $permission = Permission::create(['name' => 'approve-invoice', 'guard_name' => 'api']);
    }
}
