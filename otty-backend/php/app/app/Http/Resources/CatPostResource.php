<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CatPostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [

            'post' => [
                'id' => $this->id,
                'lat' => $this->lat,
                'lng' => $this->lng,
                'notes' => $this->notes,
                'created_at' => $this->created_at
            ],
            'user' => $this->user_id,
            'images' => ImagesResource::collection($this->images),
        ];
    }
}
