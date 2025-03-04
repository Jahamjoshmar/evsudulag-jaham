<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers()
    {
        $users = [
            ['id' => 1, 'name' => 'Joshmar', 'email' => 'josh@example.com'],
            ['id' => 2, 'name' => 'Jane Smith', 'email' => 'jane@example.com']
        ];
        return response()->json($users);
    }
}
