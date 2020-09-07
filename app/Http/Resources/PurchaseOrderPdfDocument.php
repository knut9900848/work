<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PurchaseOrderPdfDocument extends JsonResource
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
            'name' => $this->name,
            'origin_name' => $this->origin_name,
            'version' => $this->version,
            'extension' => $this->extension,
            'process' => $this->purchase_order_processes->last()->name,
            'user_id' => $this->user->id,
            'creator_name' => $this->user->name,
            'purchase_order_id' => $this->purchase_order_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
