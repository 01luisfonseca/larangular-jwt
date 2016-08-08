<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{

    /**
     * Return the user
     *
     * @return Response(JSON)
     */
    public function all()
    {

        // Retrieve all the users in the database and return them        
        $users = User::all();
        $response=$users->toJson()

        return $response;
    }

    /**
     * Return a JWT
     *
     * @return Response
     */
    public function modify(Request $request)
    {
        return response()->json([]);
    }
}