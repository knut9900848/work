<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    protected $table = 'works';

    public function company()
    {
        return $this->belongsTo('App\Model\Company');
    }

    public function project()
    {
        return $this->belongsTo('App\Model\Project');
    }

    public function sub_project()
    {
        return $this->belongsTo('App\Model\SubProject');
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }

    public function branch()
    {
        return $this->belongsTo('App\Model\Admin\Branch');
    }

    public function account_transaction()
    {
        return $this->belongsTo('App\Model\AccountTransaction');
    }

    public function currency()
    {
        return $this->belongsTo('App\Model\Admin\Currency');
    }

    public function quotations()
    {
        return $this->hasMany('App\Model\Quotation');
    }

    public function sale_order()
    {
        return $this->hasOne('App\Model\SaleOrder')->withDefault([
            'id' => null
        ]);
    }

    public function wcc()
    {
        return  $this->hasOne('App\Model\Wcc')->withDefault([
            'id' => null
        ]);
    }

    public function invoice()
    {
        return  $this->hasOne('App\Model\Invoice')->withDefault([
            'id' => null
        ]);
    }

    public function payment()
    {
        return  $this->hasOne('App\Model\Payment')->withDefault([
            'id' => null
        ]);
    }

    public function work_status_histories()
    {
        return $this->hasMany('App\Model\WorkStatusHistory');
    }
}
