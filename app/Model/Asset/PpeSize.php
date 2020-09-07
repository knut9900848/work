<?php

namespace App\Model\Asset;

use Illuminate\Database\Eloquent\Model;

class PpeSize extends Model
{
    public function ppe_sub_category()
    {
        return $this->belongsTo('App\Model\Asset\PpeSubCategory');
    }
}
