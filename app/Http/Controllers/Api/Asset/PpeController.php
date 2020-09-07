<?php

namespace App\Http\Controllers\Api\Asset;

use App\Model\Asset\Ppe;
use App\Model\Asset\PpeCategory;
use App\Model\Worker;
use App\Http\Resources\Ppe as PpeResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Asset\PpeAction;
use App\Model\Asset\PpeType;

class PpeController extends Controller
{
    public function index()
    {
        $desserts = Ppe::orderByDesc('date')->get();
        $workers = Worker::all();
        $categories = PpeCategory::all();
        $actions = PpeAction::all();
        $types = PpeType::all();

        return response()->json([
            "desserts" => PpeResource::collection($desserts),
            "workers" => $workers,
            "categories" => $categories,
            "actions" => $actions,
            "types" => $types,

        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'action' => 'required',
            'date' => 'required',
            'items.*.ppe_category.id' => 'required',
            'items.*.ppe_sub_category.id' => 'required',
            'items.*.ppe_size.id' => 'required',
            'items.*.ppe_type.id' => 'required',
            'items.*.amount' => 'required',
            'items.*.receiver.id' => 'required',
        ]);

        $lines = [];
        foreach ($request->items as $item) {
            $ppe = Ppe::updateOrCreate([
                'id' => $item['id'],
            ], [
                'ppe_category_id' => $item['ppe_category']['id'],
                'ppe_sub_category_id' => $item['ppe_sub_category']['id'],
                'ppe_size_id' => $item['ppe_size']['id'],
                'ppe_type_id' => $item['ppe_type']['id'],
                'receiver_id' => $item['receiver']['id'],
                'amount' => $item['amount'],
                'user_id' => auth()->user()->id,
            ]);
            $ppe->ppe_action_id = $request->action;
            $ppe->date = $request->date;
            $ppe->save();

            $line = new PpeResource($ppe);
            array_push($lines, $line);
        }

        return response()->json([
            "lines" => $lines,
        ]);
    }
}
