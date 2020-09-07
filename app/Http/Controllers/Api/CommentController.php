<?php

namespace App\Http\Controllers\Api;

use App\Model\Comment;
use App\Http\Resources\Comment as CommentResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class CommentController extends Controller
{
    public function index($model, $model_id)
    {   
        $model = "App\\Model\\" . $model;
        $modelObject = $model::findOrFail($model_id);
        $comments = $modelObject->comments;
        
        return CommentResource::collection($comments);
    }

    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'required'
        ]);

        $model = "App\\Model\\" . $request->model;

        $comment = new Comment;
        $comment->body = $request->comment;
        $comment->user_id = $request->user_id;
        $comment->commentable_id = $request->model_id;
        $comment->commentable_type = $model;
        $comment->save();

        return new CommentResource($comment);
    }

    public function update(Request $request, $comment_id)
    {
        $request->validate([
            'comment' => 'required'
        ]);

        $model = "App\\Model\\" . $request->model;

        $comment = Comment::findOrFail($comment_id);
        $comment->body = $request->comment;
        $user_id = $request->user_id;
        $commentable_id = $request->model_id;
        $commentable_type = $model;
        $comment->save();

        return new CommentResource($comment);
    }

    public function destroy($comment_id)
    {
        $comment = Comment::findOrFail($comment_id);
        $comment->delete();

        return response()->json([
            "result" => "success",
            "message" => "Comment has deleted successfully.",
        ]);
    }
}
