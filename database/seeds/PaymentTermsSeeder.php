<?php

use Illuminate\Database\Seeder;

class PaymentTermsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $payment_terms = [
            [
                'name' => 'Immediate Payment',
                'display_name' => 'Immediate Payment',
                'terms' => 0,
                'in_days' => 0,
                'discount' => 0,
                'description' => '',
                'is_active' => false,
            ],
            [
                'name' => 'Net 15',
                'display_name' => 'Net 15',
                'terms' => 15,
                'in_days' => 15,
                'discount' => 0,
                'description' => '',
                'is_active' => false,
            ],
            [
                'name' => 'Net 7',
                'display_name' => 'Net 7',
                'terms' => 7,
                'in_days' => 0,
                'discount' => 0,
                'description' => '',
                'is_active' => false,
            ],
            [
                'name' => 'Net 30',
                'display_name' => 'Net 30',
                'terms' => 30,
                'in_days' => 30,
                'discount' => 0,
                'description' => '',
                'is_active' => false,
            ],
            [
                'name' => 'Net 45',
                'display_name' => 'Net 45',
                'terms' => 45,
                'in_days' => 45,
                'discount' => 0,
                'description' => '',
                'is_active' => false,
            ],
            [
                'name' => 'Net 60',
                'display_name' => 'Net 60',
                'terms' => 60,
                'in_days' => 60,
                'discount' => 0,
                'description' => '',
                'is_active' => false,
            ],
        ];
        DB::table('payment_terms')->insert($payment_terms);
    }
}
