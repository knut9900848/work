<?php

namespace App\Http\Controllers\Api;

use App\Model\Field;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FieldController extends Controller
{
    public function store(Request $request) {

        $model = "App\\Model\\" . $request->model;
        $modelObject = $model::findOrFail($request->model_id);
        $modelObject->fields()->delete();

        $fields = $request->fields;

        if (isset($fields) && count($fields) > 0) {
            for ( $i=0; $i < count($fields); $i++ ) {
                $field = new Field;
                $field->title = $fields[$i]['title'];
                $field->content = $fields[$i]['content'];
                $field->position = $fields[$i]['position'];
                $field->fieldable_id = $modelObject->id;
                $field->fieldable_type = $model;
                $field->save();
            }
        }
    }
}
