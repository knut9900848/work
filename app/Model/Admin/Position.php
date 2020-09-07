<?php

namespace App\Model\Admin;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    public function department() {
        return $this->belongsTo('App\Model\Admin\Department');
    }
}
