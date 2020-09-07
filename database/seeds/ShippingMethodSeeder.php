<?php

use Illuminate\Database\Seeder;

class ShippingMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('shipping_methods')->truncate();
        $shipping_method = [
            [
                'name' => 'Air freight',
                'display_name' => '항공운송',
                'description' => '',
                'is_active' => true,
            ]
        ];
        DB::table('shipping_methods')->insert($shipping_method);
    }
}
