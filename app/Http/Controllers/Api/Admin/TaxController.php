<?php

namespace App\Http\Controllers\Api\Admin;

use App\Model\Admin\Tax;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaxController extends Controller
{
    public function index() {
        $taxes = Tax::all();
        
        return response()->json([
            "taxes" => $taxes;
        ]);
    }
}
