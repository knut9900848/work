<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Ppe extends JsonResource
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
            "id" => $this->id,
            "ppe_category" => $this->ppe_category,
            "ppe_sub_category" => $this->ppe_sub_category,
            "ppe_size" => $this->ppe_size,
            "receiver" => $this->receiver,
            "amount" => $this->amount,
            "type" => $this->ppe_type,
            "date" => $this->date,
            "action" => $this->ppe_action,
        ];
    }
}
