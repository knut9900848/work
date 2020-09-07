<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DeliveryHistory extends Model
{
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function delivery_note() 
    {
        return $this->belongsTo('App\Model\DeliveryNote');
    }
}
