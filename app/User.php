<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use Spatie\Permission\Traits\HasRoles;

use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;

use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, Notifiable, HasRoles;

  protected $guard_name = 'api';

  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'name', 'email', 'password',
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
    'password', 'remember_token',
  ];

  /**
   * The attributes that should be cast to native types.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  public function getAllPermissionsAttribute()
  {
    $permissions = [];
    foreach (Permission::all() as $permission) {
      if (Auth::user()->can($permission->name)) {
        $permissions[] = $permission->name;
      }
    }
    return $permissions;
  }

  public function member_approval_amounts()
  {
    return $this->hasMany("App\Model\Admin\MemberApprovalAmount");
  }
}
