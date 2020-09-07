<?php

namespace App\Model\Asset;

use Illuminate\Database\Eloquent\Model;

class PpeType extends Model
{
    public function ppes()
    {
        return $this->hasMany('App\Model\Asset\Ppe');
    }
}
