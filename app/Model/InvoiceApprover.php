<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class InvoiceApprover extends Model
{
    public function manager()
    {
        return $this->belongsTo('App\User', 'manager_id');
    }
}
