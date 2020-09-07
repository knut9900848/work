<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Pdf extends JsonResource
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
            'creator_name' => $this->user->name,
            'user_id' => $this->user->id,
            'pdfable_id' => $this->pdfable_id,
            'pdfable_type' => $this->pdfable_type,
            'created_at' => $this->created_at,
            'process' => $this->processes->last()->name,
        ];
    }
}
