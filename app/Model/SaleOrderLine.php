<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SaleOrderLine extends Model
{
    protected $fillable =  [
        'id',
        'title',
        'sale_order_id',
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
}
