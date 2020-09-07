<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Wcc extends Model
{
    public function approver()
    {
        return $this->belongsTo('App\Model\People', 'approver_id');
    }

    public function work()
    {
        return $this->belongsTo('App\Model\Work');
    }

    public function company()
    {
        return $this->belongsTo('App\Model\Company');
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
}
