<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class UserController extends Controller
{


    public function index()
    {
        return response()->json(User::all());
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response(new User($user), 200);
    }


//    public function store(StoreCatPostRequest $request): JsonResponse
//    {
//        $validator = Validator::make($request->all(), [
//            'name' => 'required|string',
//            'description' => 'required|string',
//            'type' => 'required|integer',
//            'genres' => 'required|array',
//            'images.*' => 'exists:genres,id',
//
//        ]);
//        $catPost = new CatPost;
//        $catPost->name = $request->name;
//
//        $catPost->save();
//        $catPost->genres()->attach($request->genres);
//        return response()->json([
//            'status' => true,
//            'message' => "Post Created successfully!",
//            'post' => $catPosts
//        ], 200);
//    }


}
