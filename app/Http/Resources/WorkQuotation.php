<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

class WorkQuotation extends JsonResource
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
            'company' => $this->company->name,
            'project' => $this->project->name,
            'sub_project' => $this->sub_project->name,
            'status' => $this->status,
            'pdf' => $this->quotation_pdfs->last(),
        ];
    }
}
