<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvoicePdfDocument extends Model
{
    public function invoice_processes()
    {
        return $this->hasMany('App\Model\InvoiceProcess');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
