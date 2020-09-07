<?php

namespace App\Http\Controllers\Api;

use App\Model\DeliveryNote;
use App\Model\DeliveryHistory;
use App\Model\DeliveryNotificationReceiver;
use App\Model\Item;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\DeliveryNote as DeliveryNoteResource;
use App\Http\Resources\DeliveryHistory as DeliveryHistoryResource;
use Auth;
use Notification;
use Carbon\Carbon;
use App\Notifications\DeliveryStatusChanged;

class DeliveryNoteController extends Controller
{
	public function index()
	{
		$deliveryNotes = DeliveryNote::orderBy('quotation_issued_date', 'desc')->get();

		$collection = DeliveryNoteResource::collection($deliveryNotes);
		$users = User::all();

		return response()->json([
			"deliveryNotes" => $collection,
			'users' => $users,
		]);
	}

	public function getDeliveryHistories($delivery_note_id)
	{
		$deliveryNote = DeliveryNote::findOrFail($delivery_note_id);
		$deliveryHistories = $deliveryNote->delivery_histories;

		$deliveryHistories = DeliveryHistoryResource::collection($deliveryHistories);

		return response()->json([
			"deliveryHistories" => $deliveryHistories
		]);
	}

	public function changeStatus(Request $request, $delivery_note_id)
	{
		$request->validate([
			'status' => 'required',
		]);

		$deliveryNote = DeliveryNote::findOrFail($delivery_note_id);
		$previousDeliveryNote = $deliveryNote->status;
		if ($previousDeliveryNote === "DELIVERED")
			$deliveryNote->delivered_date = null;
		if ($request->status === "DELIVERED")
			$deliveryNote->delivered_date = $deliveryNote->delivered_date = Carbon::now()->toDateTimeString();
		$deliveryNote->status = $request->status;
		$deliveryNote->save();

		$deliveryHistory = new DeliveryHistory;
		$deliveryHistory->delivery_note_id = $deliveryNote->id;
		$deliveryHistory->status = $request->status;
		$deliveryHistory->message = $request->message;
		$deliveryHistory->user_id = Auth::user()->id;
		$deliveryHistory->save();
		$deliveryHistory = new DeliveryHistoryResource($deliveryHistory);

		$deliveryHistories = $deliveryNote->delivery_histories;
		$deliveryHistories = DeliveryHistoryResource::collection($deliveryHistories);

		$sender = Auth::user();
		if ($request->receivers) {
			foreach ($request->receivers as $receiver) {
				$receiver = User::find($receiver['id']);
				$receivers[] = $receiver;
			}
			$message = $deliveryHistory->message;
			$when = Carbon::now()->addSeconds(30);
			Notification::send($receivers, (new DeliveryStatusChanged($deliveryHistory, $deliveryNote, $message, $sender))->delay($when));
		}

		return response()->json([
			"result" => "success",
			"message" => "Delivery Status has changed successfully",
			"status" => $deliveryHistory->status,
			"deliveredDate" => $deliveryNote->delivered_date,
			'deliveryHistories' => $deliveryHistories,
		]);
	}
}
