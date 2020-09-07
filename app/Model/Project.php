<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function sub_projects() 
    {
        return $this->hasMany('App\Model\SubProject');
    }
}
