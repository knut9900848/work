<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvoiceLine extends Model
{
    protected $fillable =  [
        'id',
        'invoice_id',
        'title',
        'description',
        'name',
        'size',
        'price',
        'quantity',
        'unit',
        'product_id',
        'item_category_id',
        'item_sub_category_id',
        'order'
    ];
    public function invoice()
    {
        $this->belongsTo('App\Model\Invoice');
    }
}
