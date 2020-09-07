<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class People extends Model
{
    public function peopleable()
    {
        return $this->morphTo();
    }
}
