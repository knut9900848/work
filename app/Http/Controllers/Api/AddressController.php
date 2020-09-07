<?php

namespace App\Http\Controllers\Api;

use App\Model\Address;
use App\Model\Admin\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AddressController extends Controller
{
    public function getAddresses($model, $model_id)
    {
        $model = "App\\Model\\" . $model;
        $object = $model::findOrFail($model_id);
        $addresses = $object->addresses;

        return response()->json([
            "addresses" => $addresses,
        ]);
    }

    public function saveAddress(Request $request, $model, $model_id)
    {
        $request->validate([
            'name' => 'required|max:100',
            'description' => 'max:255',
        ]);

        $model = "App\\Model\\" . $model;
        $object = $model::findOrFail($model_id);

        $address = new Address;
        $address->name = $request->name;
        $address->street1 = $request->street1;
        $address->street2 = $request->street2;
        $address->city = $request->city;
        $address->state = $request->state;
        $address->country = $request->country;
        $address->zipcode = $request->zipcode;
        $address->description = $request->description;
        $address->is_active = $request->is_active;

        $object->addresses()->save($address);

        return response()->json([
            "result" => "success",
            "message" => "Address has been added successfully.",
            "address" => $address
        ]);
    }

    public function updateAddress(Request $request, $address_id)
    {
        $request->validate([
            'name' => 'required|max:100',
            'description' => 'max:255',
        ]);

        $address = Address::findOrFail($address_id);

        $address->name = $request->name;
        $address->street1 = $request->street1;
        $address->street2 = $request->street2;
        $address->city = $request->city;
        $address->state = $request->state;
        $address->country = $request->country;
        $address->zipcode = $request->zipcode;
        $address->description = $request->description;
        $address->is_active = $request->is_active;
        $address->save();

        return response()->json([
            "result" => "success",
            "message" => "Address has been updated successfully.",
            "address" => $address
        ]);
    }
}
