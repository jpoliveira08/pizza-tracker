<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'toppings' => 'array',
    ];

    protected $hidden = [
        'user',
    ];

    protected $appends = [
      'chef'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getChefAttribute(): string
    {
        return $this->user->name;
    }
}
