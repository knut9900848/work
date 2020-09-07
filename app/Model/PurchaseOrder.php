<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PurchaseOrder extends Model
{
    // public function sale_order() {
    //     return $this->belongsTo('App\Model\SaleOrder');
    // }

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

    public function currency()
    {
        return $this->belongsTo('App\Model\Admin\Currency');
    }

    public function supplier()
    {
        return $this->belongsTo('App\Model\Supplier');
    }

    public function originator()
    {
        return $this->belongsTo('App\User', 'originator_id');
    }

    public function receiver()
    {
        return $this->belongsTo('App\Model\People', 'receiver_id');
    }

    public function purchase_order_lines()
    {
        return $this->hasMany('App\Model\PurchaseOrderLine');
    }

    public function fields()
    {
        return $this->morphMany('App\Model\Field', 'fieldable');
    }

    public function files()
    {
        return $this->morphMany('App\Model\File', 'fileable');
    }

    public function comments()
    {
        return $this->morphMany('App\Model\Comment', 'commentable');
    }

    public function pdfs()
    {
        return $this->morphMany('App\Model\Pdf', 'pdfable');
    }

    public function attachments()
    {
        return $this->morphMany('App\Model\Attachment', 'attachmentable');
    }

    public function purchase_order_list()
    {
        return $this->hasOne('App\Model\PurchaseOrderList');
    }

    public function image()
    {
        return $this->morphOne('App\Image', 'imageable');
    }

    public function purchase_order_option()
    {
        return $this->hasOne('App\Model\PurchaseOrderOption');
    }

    public function payment_terms()
    {
        return $this->belongsTo('App\Model\Admin\PaymentTerms');
    }

    public function delivery_terms()
    {
        return $this->belongsTo('App\Model\Admin\DeliveryTerms');
    }

    public function purchase_order_pdf_documents()
    {
        return $this->hasMany('App\Model\PurchaseOrderPdfDocument');
    }
}
