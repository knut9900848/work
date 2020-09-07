<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderLine extends Model
{
    protected $fillable =  [
        'id',
        'title',
        'purchase_order_id',
        'description',
        'name',
        'size',
        'price',
        'quantity',
        'unit',
        'product_id',
        'item_category_id',
        'item_sub_category_id',
        'order',
    ];

    public function purchase_order()
    {
        return $this->belongsTo('App\Model\PurchaseOrder');
    }
}
