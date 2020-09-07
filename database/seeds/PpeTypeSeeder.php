<?php

use Illuminate\Database\Seeder;

class PpeTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ppe_types = [
            [
                'name' => '새제품',
            ],
            [
                'name' => '중고제품',
            ]
        ];
        DB::table('ppe_types')->insert($ppe_types);
    }
}
