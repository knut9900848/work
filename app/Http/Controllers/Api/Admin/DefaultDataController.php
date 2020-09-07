<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;
use App\Model\Admin\Branch;
use App\Model\Admin\Bank;
use App\Model\Admin\Currency;
use App\Model\Admin\Unit;
use App\Model\Admin\Country;
use App\Model\Admin\PaymentMethod;
use App\Model\Admin\PaymentTerms;
use App\Model\Admin\ManpowerDiscipline;
use App\Model\Admin\ManpowerPosition;
use App\Model\Admin\Department;
use App\Model\Admin\Position;
use App\Model\Admin\ShippingMethod;
use App\Model\Admin\DeliveryTerms;
use App\Model\Admin\LaborWage;
use App\Model\Admin\PurchaseOrderTermsAndConditions;

class DefaultDataController extends Controller
{
    public function getDefaultData()
    {
        $defaultData = new Collection([
            'branches' => Branch::all(),
            'banks' => Bank::all(),
            'currencies' => Currency::all(),
            'units' => Unit::all(),
            'countries' => Country::all(),
            'paymentMethods' => PaymentMethod::all(),
            'paymentTerms' => PaymentTerms::all(),
            'manpowerDisciplines' => ManpowerDiscipline::all(),
            'manpowerPositions' => ManpowerPosition::all(),
            'departments' => Department::all(),
            'positions' => Position::all(),
            'shippingMethods' => ShippingMethod::all(),
            'deliveryTerms' => DeliveryTerms::all(),
            'laborWages' => LaborWage::all(),
            'purchaseOrderTermsAndConditions' => PurchaseOrderTermsAndConditions::all(),
        ]);

        return response()->json([
            "defaultData" => $defaultData
        ]);
    }
}
