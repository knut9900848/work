<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    public function fieldable()
    {
        return $this->morphTo();
    }
}
