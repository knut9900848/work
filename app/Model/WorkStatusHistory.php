<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class WorkStatusHistory extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
