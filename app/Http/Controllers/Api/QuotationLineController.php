<?php

namespace App\Http\Controllers\Api;

use App\Model\QuotationLine;
use App\Model\Quotation;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Event\UpdateOrCreateDeliveryNoteEvent;

class QuotationLineController extends Controller
{
    public function store(Request $request, $quotation_id)
    {
        $quotation = Quotation::findOrFail($quotation_id);
        $currency = $quotation->currency->name;

        // 이전 데이터와 새로운 데이터를 비교하여 누락된(삭제될) 아이템의 ID 배열을 구한 후 삭제한다.
        $oldLineIds = $quotation->quotation_lines->pluck('id')->toArray();
        $newLineIds = collect($request->all())->pluck('id')->toArray();
        $diff = array_diff($oldLineIds, $newLineIds);
        QuotationLine::destroy($diff);

        foreach ($request->all() as $item) {
            $line = QuotationLine::updateOrCreate([
                'id' => $item['id'],
            ], [
                'title' => $item['title'],
                'quotation_id' => $quotation_id,
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

            event(new UpdateOrCreateDeliveryNoteEvent($line, $currency));
        }
    }
}
