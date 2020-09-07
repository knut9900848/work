<?php

namespace App\Model\Asset;

use Illuminate\Database\Eloquent\Model;

class PpeSubCategory extends Model
{
    public function ppe_sizes()
    {
        return $this->hasMany('App\Model\Asset\PpeSize');
    }
}
