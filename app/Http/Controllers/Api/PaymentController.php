<?php

namespace App\Http\Controllers\Api;

use App\Model\Payment;
use App\Model\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'work_id' => 'required',
            'date' => 'required|date',
            'company_id' => 'required',
            'payment_method' => 'required',
            'bank' => 'exclude_unless:bank, Bank Transfers|required',
            'currency_id' => 'required',
            'total_price' => 'required',
            'discount' => 'required',
            'shipping_fee' => 'required',
            'tax' => 'required',
            'grand_total' => 'required',
            'exchange_rate' => 'required',
            'exchanged_total_price' => 'required'
        ]);

        $payment = new Payment;
        $payment->work_id = $request->input('work_id');
        $payment->date = $request->input('date');
        $payment->company_id = $request->input('company_id');
        $payment->payment_method = $request->input('payment_method');
        $payment->bank = $request->input('bank');
        $payment->currency_id = $request->input('currency_id');
        $payment->total_price = $request->input('total_price');
        $payment->discount = $request->input('discount');
        $payment->shipping_fee = $request->input('shipping_fee');
        $payment->tax = $request->input('tax');
        $payment->grand_total = $request->input('grand_total');
        $payment->exchange_rate = $request->input('exchange_rate');
        $payment->exchanged_total_price = $request->input('exchanged_total_price');
        $payment->save();

        $work = $payment->work;
        $work->payment_date = $payment->date;
        $work->payment_currency = $payment->currency->name;
        $work->payment_total_price = $payment->total_price;
        $work->payment_exchange_rate = $payment->exchange_rate;
        $work->payment_exchanged_total_price = $payment->exchanged_total_price;
        $work->phase = "PYMT";
        $work->save();

        // Update Delivery Note
        if ($work->quotations) {
            foreach ($work->quotations as $quotation) {
                foreach ($quotation->quotation_lines as $line) {
                    $line->delivery_note->payment_received_date = $payment->date;
                    $line->delivery_note->save();
                }
            }
        }

        return response()->json([
            "result" => "success",
            "message" => "New payment has created successfully.",
            "payment" => $payment,
            "work" => $work,
        ]);
    }

    public function init($work_id)
    {
        $work = Work::findOrFail($work_id);
        $invoice = $work->invoice;

        $payment = new Payment;
        $payment->id = null;
        $payment->work_id = $work_id;
        $payment->date = null;
        $payment->company_id = $invoice->company_id;
        $payment->payment_method = null;
        $payment->bank = null;
        $payment->currency_id = $work->currency->id;
        $payment->total_price = $invoice->total_price;
        $payment->discount = $invoice->discount;
        $payment->shipping_fee = $invoice->shipping_fee;
        $payment->tax = $invoice->tax;
        $payment->grand_total = $invoice->grand_total;
        $payment->exchange_rate = 1;
        $payment->exchanged_total_price = 0;

        return response()->json([
            "payment" => $payment,
        ]);
    }

    public function show($payment_id)
    {
        $payment = Payment::findOrFail($payment_id);

        return response()->json([
            "payment" => $payment,
        ]);
    }

    public function update(Request $request, $payment_id)
    {
        $payment = Payment::findOrFail($payment_id);
        $payment->work_id = $request->input('work_id');
        $payment->date = $request->input('date');
        $payment->company_id = $request->input('company_id');
        $payment->payment_method = $request->input('payment_method');
        $payment->bank = $request->input('bank');
        $payment->currency_id = $request->input('currency_id');
        $payment->total_price = $request->input('total_price');
        $payment->discount = $request->input('discount');
        $payment->shipping_fee = $request->input('shipping_fee');
        $payment->tax = $request->input('tax');
        $payment->grand_total = $request->input('grand_total');
        $payment->exchange_rate = $request->input('exchange_rate');
        $payment->exchanged_total_price = $request->input('exchanged_total_price');
        $payment->save();

        $work = $payment->work;
        $work->payment_date = $payment->date;
        $work->payment_currency = $payment->currency->name;
        $work->payment_total_price = $payment->total_price;
        $work->payment_exchange_rate = $payment->exchange_rate;
        $work->payment_exchanged_total_price = $payment->exchanged_total_price;
        $work->save();

        // Update Delivery Note
        if ($work->quotations) {
            foreach ($work->quotations as $quotation) {
                foreach ($quotation->quotation_lines as $line) {
                    $line->delivery_note->payment_received_date = $payment->date;
                    $line->delivery_note->save();
                }
            }
        }

        return response()->json([
            "result" => "success",
            "message" => "payment has updated successfully.",
            "payment" => $payment,
            "work" => $work,
            "quotations" => $work->quotations,
        ]);
    }
}
