<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DeliveryNote extends Model
{
    protected $attributes = [
        'status' => "OPENED",
    ];

    protected $guarded = [];

    public function quotation_line()
    {
        return $this->belongsTo('App\Model\QuotationLine');
    }

    public function delivery_histories()
    {
        return $this->hasMany('App\Model\DeliveryHistory');
    }
}
