<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DeliveryNote extends JsonResource
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
            'quotation_line_id' => $this->item_id,
            'line_description' => $this->line_description,
            'price' => $this->price,
            'currency' => $this->currency,
            'status' => $this->status,
            'quotation_number' => $this->quotation_number,
            'quotation_project' => $this->quotation_project,
            'quotation_sr_number' => $this->quotation_sr_number,
            'quotation_issued_date' => $this->quotation_issued_date,
            'sale_order_number' => $this->sale_order_number,
            'invoice_number' => $this->invoice_number,
            'invoice_date' => $this->invoice_date,
            'invoice_payment_due_date' => $this->invoice_payment_due_date,
            'delivered_date' => $this->delivered_date,
            'payment_received_date' => $this->payment_received_date,
        ];
    }
}
