<?php

use Illuminate\Database\Seeder;

class TaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('suppliers')->truncate();
        $tax = [
            [
                'name' => 'V.A.T(10%)',
                'display_name' => '부가세',
                'rate' => '10',
                'description' => '한국 부가 가치세'
            ]
        ];
        DB::table('taxes')->insert($tax);
    }
}
