<?php

namespace App\Http\Controllers\Api;

use App\Model\AccountTransaction;
use App\Model\Admin\Bank;
use App\Model\Admin\Currency;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\AccountTransaction as AccountTransactionResource;

class AccountTransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $accountTransactions = AccountTransaction::all();
        return response()->json([
            "accountTransactions" => AccountTransactionResource::collection($accountTransactions),
            "banks" => Bank::all(),
            "currencies" => Currency::all(),
        ]);
    }


    public function store(Request $request)
    {
        $accountTransaction = new AccountTransaction;

        $accountTransaction->received_date = $request->received_date;
        $accountTransaction->bank = $request->bank;
        $accountTransaction->currency = $request->currency;
        $accountTransaction->deposit_amount = $request->deposit_amount;
        $accountTransaction->exchange_rate = $request->exchange_rate;
        $accountTransaction->exchanged_amount = $request->exchanged_amount;
        $accountTransaction->description = $request->description;
        $accountTransaction->save();

        return response()->json([
            "result" => "success",
            "message" => "New Account Transaction has input successfully.",
            "accountTransaction" => $accountTransaction,
        ]);
    }

    public function show(Request $request, $account_transaction_id)
    {
        $accountTransaction = AccountTransaction::findOrFail($account_transaction_id);

        $accountTransaction->received_date = $request->received_date;
        $accountTransaction->bank = $request->bank;
        $accountTransaction->currency = $request->currency;
        $accountTransaction->deposit_amount = $request->deposit_amount;
        $accountTransaction->exchange_rate = $request->exchange_rate;
        $accountTransaction->exchanged_amount = $request->exchanged_amount;
        $accountTransaction->description = $request->description;
        $accountTransaction->save();

        return response()->json([
            "result" => "success",
            "message" => "Account Transaction has input successfully.",
            "accountTransaction" => $accountTransaction,
        ]);
    }


    public function update(Request $request, AccountTransaction $accountTransaction)
    {
        //
    }

    public function destroy(AccountTransaction $accountTransaction)
    {
        //
    }
}
