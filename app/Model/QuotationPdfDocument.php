<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class QuotationPdfDocument extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function quotation()
    {
        return $this->belongsTo('App\Model\Quotation');
    }

    public function quotation_processes()
    {
        return $this->hasMany('App\Model\QuotationProcess');
    }
}
