<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\Currency;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CurrencyController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'symbol' => 'required'
        ]);

        $currency = new Currency;
        $currency->name = $request->name;
        $currency->display_name = $request->display_name;
        $currency->country = $request->country;
        $currency->exchange_rate = $request->exchange_rate;
        $currency->symbol = $request->symbol;
        $currency->is_active = $request->is_active;
        $currency->save();

        return response()->json([
            "result" => "success",
            "data" => $currency,
            "message" => "New Currency has been successfully created"
        ]);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:30',
            'display_name' => 'required|max:30',
            'symbol' => 'required'
        ]);

        $currency = Currency::findOrFail($id);
        $currency->name = $request->name;
        $currency->display_name = $request->display_name;
        $currency->country = $request->country;
        $currency->exchange_rate = $request->exchange_rate;
        $currency->symbol = $request->symbol;
        $currency->is_active = $request->is_active;
        $currency->save();

        return response()->json([
            "result" => "success",
            "data" => $currency,
            "message" => "Currency has been successfully updated"
        ]);
    }

    public function destroy($id) {
        $currency = Currency::findOrFail($id);
        $currency->delete();

        return response()->json([
            "result" => "success",
            "message" => "Currency has been successfully deleted",
            "data" => $currency
        ]);
    }
}
