<?php

use Illuminate\Database\Seeder;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('suppliers')->truncate();
        $supplier = [
            [
                'name' => '청솔일렉트릭',
                'display_name' => '청솔일렉트릭',
                'email' => 'cs-electric@daum.net',
                'phone' => '052)700-7060',
                'fax' => '052)700-7061',
                'url' => '',
                'reg_number' => '',
                'code' => 'CSE',
                'is_active' => true,
                'description' => '전기 케이블 벤더',
            ]
        ];
        DB::table('suppliers')->insert($supplier);
    }
}
