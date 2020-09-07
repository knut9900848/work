<?php

use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('currencies')->truncate();
        $currency = [
            [
                'name' => 'USD',
                'display_name' => 'USD',
                'exchange_rate' => 1200,
                'symbol' => 'US$',
                'country' => 'United State',
                'description' => '',
                'is_active' => true
            ],

            [
                'name' => 'KRW',
                'display_name' => 'KRW',
                'exchange_rate' => 1200,
                'symbol' => 'KRW',
                'country' => 'South Korea',
                'description' => '',
                'is_active' => true
            ],

            [
                'name' => 'EUR',
                'display_name' => 'EUR',
                'exchange_rate' => 1350,
                'symbol' => 'EUR',
                'country' => 'EU',
                'description' => '',
                'is_active' => true
            ]
        ];
        DB::table('currencies')->insert($currency);
    }
}
