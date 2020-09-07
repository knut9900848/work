<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderPdfDocument extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function purchase_order()
    {
        return $this->belongsTo('App\Model\PurchaseOrder');
    }

    public function purchase_order_processes()
    {
        return $this->hasMany('App\Model\PurchaseOrderProcess');
    }
}
