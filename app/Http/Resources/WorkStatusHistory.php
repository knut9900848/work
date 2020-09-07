<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkStatusHistory extends JsonResource
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
            'work_id' => $this->id,
            'user_name' => $this->user->name,
            'user_avatar' => $this->user->avatar,
            'name' => $this->name,
            'description' => $this->description,
            'updated_at' => $this->updated_at,
        ];
    }
}
