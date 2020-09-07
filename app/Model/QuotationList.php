<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class QuotationList extends Model
{
    public function quotation()
    {
        return $this->belongsTo('App\Model\Quotation');
    }
}
