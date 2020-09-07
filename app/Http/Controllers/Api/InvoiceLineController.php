<?php

namespace App\Http\Controllers\Api;

use App\Model\InvoiceLine;
use App\Model\Invoice;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceLineController extends Controller
{
    public function store(Request $request, $invoice_id)
    {
        $invoice = Invoice::findOrFail($invoice_id);

        // 이전 데이터와 새로운 데이터를 비교하여 누락된(삭제될) 아이템의 ID 배열을 구한 후 삭제한다.
        $oldLineIds = $invoice->invoice_lines->pluck('id')->toArray();
        $newLineIds = collect($request->all())->pluck('id')->toArray();
        $diff = array_diff($oldLineIds, $newLineIds);
        InvoiceLine::destroy($diff);

        foreach ($request->all() as $item) {
            $line = InvoiceLine::updateOrCreate([
                'id' => $item['id'],
            ], [
                'title' => $item['title'],
                'invoice_id' => $invoice_id,
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
