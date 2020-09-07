<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
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

    public function currency()
    {
        return $this->belongsTo('App\Model\Admin\Currency');
    }

    public function invoice_option()
    {
        return $this->hasOne('App\Model\InvoiceOption');
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

    public function invoice_lines()
    {
        return $this->hasMany('App\Model\InvoiceLine');
    }

    public function invoice_ies_reminders()
    {
        return $this->hasMany('App\Model\InvoiceIesReminder');
    }

    public function invoice_client_reminders()
    {
        return $this->hasMany('App\Model\InvoiceClientReminder');
    }

    public function requestor()
    {
        return $this->belongsTo('App\Model\People', 'requestor_id');
    }

    public function invoice_approvers()
    {
        return $this->hasMany('App\Model\InvoiceApprover');
    }

    public function invoice_pdf_documents()
    {
        return $this->hasMany('App\Model\InvoicePdfDocument');
    }

    public function originator()
    {
        return $this->belongsTo('App\User', 'originator_id');
    }
}
