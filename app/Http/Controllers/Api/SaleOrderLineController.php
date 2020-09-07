<?php

namespace App\Http\Controllers\Api;

use App\Model\SaleOrderLine;
use App\Model\SaleOrder;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SaleOrderLineController extends Controller
{
    public function store(Request $request, $sale_order_id)
    {
        $saleOrder = SaleOrder::findOrFail($sale_order_id);

        // 이전 데이터와 새로운 데이터를 비교하여 누락된(삭제될) 아이템의 ID 배열을 구한 후 삭제한다.
        $oldLineIds = $saleOrder->sale_order_lines->pluck('id')->toArray();
        $newLineIds = collect($request->all())->pluck('id')->toArray();
        $diff = array_diff($oldLineIds, $newLineIds);
        SaleOrderLine::destroy($diff);

        foreach ($request->all() as $item) {
            $line = SaleOrderLine::updateOrCreate([
                'id' => $item['id'],
            ], [
                'title' => $item['title'],
                'sale_order_id' => $sale_order_id,
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
        }
    }
}
