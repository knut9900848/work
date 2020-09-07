<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseOrder extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'sr_number' => $this->sr_number,
            'company_id' => $this->company_id,
            'project_id' => $this->project_id,
            'sub_project_id' => $this->sub_project_id,
            'department_id' => '1',
            'branch_id' => 1,
            'category_id' => $this->category_id,
            'currency_id' => $this->currency_id,
            'supplier_id' => $this->supplier_id,
            'originator_id' => $this->originator_id,
            'receiver_id' => $this->receiver_id,
            'issued_date' => $this->issued_date,
            'ref_quote' => $this->ref_quote,
            'delivery_address' => $this->delivery_address,
            'payment_terms' => $this->payment_terms,
            'delivery_terms_id' => $this->delivery_terms_id,
            'delivery_date' => $this->delivery_date,
            'payment_due_date' => $this->payment_due_date,
            'payment_date' => $this->payment_date,
            'total_price' => $this->total_price,
            'discount' => $this->discount,
            'tax' => $this->tax,
            'grand_total' => $this->grand_total,
            'shipping_fee' => $this->shipping_fee,
            'is_emergency' => $this->is_emergency,
            'remarks' => $this->remarks,
            'summary' => $this->summary,
            'status' => $this->status,
        ];
    }
}
