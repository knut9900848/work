<?php

namespace App\Model\Asset;

use Illuminate\Database\Eloquent\Model;

class Ppe extends Model
{
    protected $fillable =  [
        'id',
        'ppe_category_id',
        'ppe_sub_category_id',
        'ppe_size_id',
        'receiver_id',
        'amount',
        'type_id',
        'user_id'
    ];

    public function ppe_category()
    {
        return $this->belongsTo('App\Model\Asset\PpeCategory');
    }

    public function ppe_sub_category()
    {
        return $this->belongsTo('App\Model\Asset\PpeSubCategory');
    }

    public function ppe_size()
    {
        return $this->belongsTo('App\Model\Asset\PpeSize');
    }

    public function receiver()
    {
        return $this->belongsTo('App\Model\Worker', 'receiver_id');
    }

    public function ppe_type()
    {
        return $this->belongsTo('App\Model\Asset\PpeType');
    }

    public function ppe_action()
    {
        return $this->belongsTo('App\Model\Asset\PpeAction');
    }
}
