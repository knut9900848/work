<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountTransaction extends JsonResource
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
            'received_date' => $this->received_date,
            'bank' => $this->bank,
            'currency' => $this->currency,
            'deposit_amount' => $this->deposit_amount,
            'exchange_rate' => $this->exchange_rate,
            'exchanged_amount' => $this->exchanged_amount,
            'description' => $this->description,
            'works' => $this->works,
        ];
    }
}
