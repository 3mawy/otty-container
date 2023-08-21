<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    public function catPost()
    {
        return $this->belongsTo(CatPost::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
