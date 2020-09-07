<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public function work() 
    {
        return $this->belongsTo('App\Model\Work');
    }

    public function currency()
    {
        return $this->belongsTo('App\Model\Admin\Currency');
    }

    public function comments()
    {
        return $this->morphMany('App\Model\Comment', 'commentable');
    }

    public function files()
    {
        return $this->morphMany('App\Model\File', 'fileable');
    }
}
