<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Comment extends JsonResource
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
            'author_avatar' => $this->user->avatar,
            'author_name' => $this->user->name,
            'author_gender' => $this->user->gender,
            'body' => nl2br($this->body),
            'plain_body' => $this->body,
            'commentable_id' => $this->commentable_id,
            'commentable_type' => $this->commentable_type,
            'created_at' => $this->created_at,
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'updated_at' => $this->updated_at,
            'user_id' => $this->user_id,
        ];
    }
}
