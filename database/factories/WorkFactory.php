<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Work;
use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(Work::class, function (Faker $faker) {

    return [
        'number' => $faker->numberBetween($min = 10000, $max = 99999),
        'status' => $faker->randomElement(['OPEN', 'HOLDING', 'CANCELED', 'COMPLETED', 'DISUSED']),
        'phase' => $faker->randomElement(['OPENED', 'RECPT PO', 'APPRVD WCC', 'SEND INV', 'PYMT']),
        'sale_order_number' => $faker->swiftBicNumber,
        'invoice_number' => $faker->numberBetween($min = 100000, $max = 999999),
        'sale_order_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'wcc_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'invoice_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'payment_term' => $faker->randomElement(['1', '10', '15', '30', '60', '90', '120', '150']),
        'payment_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'sale_order_total_price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 100, $max = 100000),
        'invoice_total_price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 100, $max = 100000),
        'payment_total_price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 100, $max = 100000),
        'payment_due_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'currency' => $faker->randomElement(['USE', 'KRW', 'VND', 'EUR', 'JPY']),
        'invoice_currency' => $faker->randomElement(['USE', 'KRW', 'VND', 'EUR', 'JPY']),
        'payment_currency' => $faker->randomElement(['USE', 'KRW', 'VND', 'EUR', 'JPY']),
        // 'company_id' => $faker->numberBetween($min = 1, $max = 100),
        // 'project_id' => $faker->numberBetween($min = 1, $max = 100),
        // 'sub_project_id' => $faker->numberBetween($min = 1, $max = 10),
        // 'category_id' => $faker->numberBetween($min = 1, $max = 5),
        'company_id' => 1,
        'project_id' => 1,
        'sub_project_id' => 1,
        'category_id' => 1,
        'branch_id' => 1,
        'department_id' => 1,
    ];
});
