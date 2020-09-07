<?php

namespace App\Http\Controllers\Api;

use App\Model\PurchaseOrderLine;
use App\Model\PurchaseOrder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PurchaseOrderLineController extends Controller
{
    public function store(Request $request, $purchase_order_id)
    {
        $purchaseOrder = PurchaseOrder::findOrFail($purchase_order_id);

        // 이전 데이터와 새로운 데이터를 비교하여 누락된(삭제될) 아이템의 ID 배열을 구한 후 삭제한다.
        $oldItemIds = $purchaseOrder->purchase_order_lines->pluck('id')->toArray();
        $newItemIds = collect($request->all())->pluck('id')->toArray();
        $diff = array_diff($oldItemIds, $newItemIds);
        PurchaseOrderLine::destroy($diff);

        foreach ($request->all() as $item) {
            $line = PurchaseOrderLine::updateOrCreate([
                'id' => $item['id'],
            ], [
                'title' => $item['title'],
                'purchase_order_id' => $purchase_order_id,
                'description' => $item['description'],
                'name' => $item['name'],
                'size' => $item['size'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'unit' => $item['unit'],
                'product_id' => 1,
                'item_category_id' => 1,
                'item_sub_category_id' => 1,
                'order' => 1,
            ]);

            // event(new UpdateOrCreateDeliveryNoteEvent($line));
        }
    }
}
