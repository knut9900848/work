<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Model\Admin\Branch;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;
use Hash;
use Storage;
use Validator;
use Image;
use Carbon\Carbon;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class MemberController extends Controller
{
    public function index()
    {
        // $users = User::with('roles')->get();
        $users = User::all();
        $roles = Role::all();
        $permissions = Permission::all();

        return response()->json([
            "users" => $users,
            "roles" => $roles,
            'permissions' => $permissions,
        ]);
    }

    public function getRoles($id)
    {
        $user = User::findOrFail($id);
        $roles = $user->getRoleNames();

        return response()->json([
            "memberRoles" => $roles
        ]);
    }

    public function getPermissions($id)
    {
        $user = User::findOrFail($id);
        $permissions = $user->getPermissionNames();

        return response()->json([
            "memberPermissions" => $permissions
        ]);
    }

    public function asyncRoles(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->syncRoles($request->roles);

        return response()->json([
            "result" => "success",
            "message" => "Roles has updated successfully"
        ]);
    }

    public function asyncPermissions(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->syncPermissions($request->permissions);

        return response()->json([
            "result" => "success",
            "message" => "Permissions has updated successfully"
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'kor_name' => 'required|string|max:255',
            'gender' => 'required',
            'email' => 'required|string|email|max:255|unique:users',
            'position' => 'required|string|max:255',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required ',
        ]);

        $user = new User;
        $user->name = $request->name;
        $user->kor_name = $request->kor_name;
        $user->gender = $request->gender;
        $user->email = $request->email;
        $user->position = $request->position;
        $user->kor_position = $request->kor_position;
        $user->password = Hash::make($request->password);
        $user->branch_id = 1;
        $user->department_id = 1;
        $user->position_id = 1;
        $user->member_group_id = 1;
        $user->phone = $request->phone;
        $user->mobile = $request->mobile;
        $user->timezone = $request->timezone;
        $user->is_active = $request->is_active;
        $user->save();

        return response()->json([
            "user" => $user,
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'kor_name' => 'required|string|max:255',
            'gender' => 'required',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'position' => 'required|string|max:255',
        ]);

        if (!empty($request->password)) {
            $request->validate([
                'password' => 'required|string|min:6|confirmed',
                'password_confirmation' => 'required'
            ]);
        }

        $user->name = $request->name;
        if (!empty($request->password)) {
            $user->password = Hash::make($request->password);
        }
        $user->name = $request->name;
        $user->kor_name = $request->kor_name;
        $user->gender = $request->gender;
        $user->email = $request->email;
        $user->position = $request->position;
        $user->kor_position = $request->kor_position;
        $user->phone = $request->phone;
        $user->mobile = $request->mobile;
        $user->timezone = $request->timezone;
        $user->is_active = $request->is_active;
        $user->save();

        return response()->json([
            'user' => $user,
        ]);
    }

    public function uploadAvatar(Request $request, $id)
    {

        if ($request->hasFile('avatar')) {
            $user = User::findOrFail($request->user_id);
            $oldFileName = $user->avatar;
            // $folderPath = storage_path('app/public/upload/img/avatar');
            $folderPath = public_path('img/avatars/');

            if (!empty($user->avatar) && file_exists($folderPath . '/' . $oldFileName)) {
                unlink($folderPath . '/' . $oldFileName);
            }

            $file = $request->file('avatar');
            $extension = $request->file('avatar')->getClientOriginalExtension();
            $filename = Carbon::now()->timestamp . "." . $extension;
            $img = Image::make($request->file('avatar'));
            $img->fit(50);
            $img->save($folderPath . '/' . $filename, 100);
            $user->avatar = $filename;
            $user->save();

            return response()->json([
                "data" => $user->avatar,
            ]);
        }
    }
}
