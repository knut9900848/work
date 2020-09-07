<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public function country()
    {
        return $this->belongsTo('App\Model\Admin\Country');
    }

    public function employees()
    {
        return $this->morphMany('App\Model\People', 'peopleable');
    }

    public function addresses()
    {
        return $this->morphMany('App\Model\Address', 'addressable');
    }
}
