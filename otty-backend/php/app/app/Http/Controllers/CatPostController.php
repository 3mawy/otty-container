<?php

namespace App\Http\Controllers;


use App\Http\Resources\CatPostResource;
use App\Models\CatPost;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class CatPostController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json(CatPost::all());
    }

    public function show($id)
    {
        $post = CatPost::findOrFail($id);
        return response(new CatPostResource($post), 200);
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


    public function destroy($catPostId)
    {
        $catPost = CatPost::findOrFail($catPostId);

        $catPost->delete();

        return response()->json([
            'status' => true,
            'message' => "Post Deleted successfully!",
        ], 200);
    }
}
