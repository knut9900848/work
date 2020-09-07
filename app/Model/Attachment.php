<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    public function attachmentable()
    {
        return $this->morphTo();
    }
}
