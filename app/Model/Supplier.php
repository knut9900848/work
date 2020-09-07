<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    public function supplier_employees()
    {
        return $this->hasMany('App\Model\SupplierEmployee');
    }

    public function supplier_bank_accounts()
    {
        return $this->hasMany('App\Model\SupplierBankAccount');
    }

    public function employees()
    {
        return $this->morphMany('App\Model\People', 'peopleable');
    }

    public function addresses()
    {
        return $this->morphMany('App\Model\Address', 'addressable');
    }
}
