<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SaleOrder extends Model
{
    public $table = "sale_orders";

    public function quotations()
    {
        return $this->hasMany('App\Model\Quotation');
    }

    public function work()
    {
        return $this->belongsTo('App\Model\Work');
    }

    public function company()
    {
        return $this->belongsTo('App\Model\Company');
    }

    public function project()
    {
        return $this->belongsTo('App\Model\Project');
    }

    public function sale_order_option()
    {
        return $this->hasOne('App\Model\SaleOrderOption');
    }

    public function comments()
    {
        return $this->morphMany('App\Model\Comment', 'commentable');
    }

    public function files()
    {
        return $this->morphMany('App\Model\File', 'fileable');
    }

    public function attachments()
    {
        return $this->morphMany('App\Model\Attachment', 'attachmentable');
    }

    public function sale_order_lines()
    {
        return $this->hasMany('App\Model\SaleOrderLine');
    }
}
