<?php

namespace App\Model\Asset;

use Illuminate\Database\Eloquent\Model;

class PpeCategory extends Model
{
    public function ppe_sub_categories()
    {
        return $this->hasMany('App\Model\Asset\PpeSubCategory');
    }
}
