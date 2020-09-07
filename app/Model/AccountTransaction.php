<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AccountTransaction extends Model
{
    public function works()
    {
        return $this->hasMany('App\Model\Work');
    }
}
