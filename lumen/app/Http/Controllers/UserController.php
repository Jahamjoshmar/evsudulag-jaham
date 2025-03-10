<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function login(Request $request)
    {
        // Validate input
        $this->validate($request, [
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        // Find user by username
        $user = DB::table('users') ->where('username', $request->username)->first();

        // If no user found
        if (!$user) {
            return response()->json([
                'message' => 'no user found'
            ], 404);
        } else {
             // if password is invalid
            if($request->password !== $user->password){
                return response()->json([
                    'message' => 'incorrect password'
                ], 401);
            }
        }

        return response()->json([
            'message' => 'Login Successful',
            'user' => [
                'id' => $user->id,
                'username' => $user->username,
                'name' => $user->name,
                'age' => $user->age
            ]
            ]);
        
    }
}



// .env
// DB_DATABASE = pos
// create a database with the name pos
// run this command
// php artisan migrate
// add record to the database
// php -S localhost:8000 -t public
// postman
// body -> username and passoword











