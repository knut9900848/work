<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrderOption extends Model
{
    public function purchase_order_terms_and_conditions()
    {
        return $this->belongsTo('App\Model\Admin\PurchaseOrderTermsAndConditions');
    }
}
