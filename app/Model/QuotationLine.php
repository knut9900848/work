<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class QuotationLine extends Model
{

    protected $fillable =  [
        'id',
        'title',
        'description',
        'name',
        'size',
        'price',
        'quantity',
        'unit',
        'quotation_id',
        'product_id',
        'item_category_id',
        'item_sub_category_id',
        'order'
    ];

    public function quotation()
    {
        return $this->belongsTo('App\Model\Quotation');
    }

    public function delivery_note()
    {
        return $this->hasOne('App\Model\DeliveryNote');
    }
}
