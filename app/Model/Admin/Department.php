<?php

namespace App\Model\Admin;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    public function branch() {
        return $this->belongsTo('App\Model\Admin\Branch');
    }
}
