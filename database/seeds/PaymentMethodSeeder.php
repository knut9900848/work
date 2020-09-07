<?php

use Illuminate\Database\Seeder;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('groups')->truncate();
        $payment = [
            [
                'name' => 'Bank Transfers',
                'display_name' => '계좌이체',
                'description' => '',
                'is_active' => true,
            ],

            [
                'name' => 'Credit Card',
                'display_name' => '신용카드',
                'description' => '',
                'is_active' => true,
            ],

            [
                'name' => 'Cash',
                'display_name' => '현금',
                'description' => '',
                'is_active' => true,
            ],
        ];
        DB::table('payment_methods')->insert($payment);
    }
}
