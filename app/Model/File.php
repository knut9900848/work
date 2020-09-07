<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    public function fileable()
    {
        return $this->morphTo();
    }
}
