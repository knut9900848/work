<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuotationPdf extends JsonResource
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
            'process' => $this->quotation_processes->last()->name,
            'user_id' => $this->user->id,
            'creator_name' => $this->user->name,
            'quotation_id' => $this->quotation_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
