<?php

use Illuminate\Database\Seeder;

class PpeActionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ppe_actions = [
            [
                'name' => "입고",
            ],
            [
                'name' => "출고",
            ],
            [
                'name' => "폐기",
            ],
            [
                'name' => "분실",
            ],
            [
                'name' => "대여",
            ],
            [
                'name' => "기타",
            ],
        ];
        DB::table('ppe_actions')->insert($ppe_actions);
    }
}
