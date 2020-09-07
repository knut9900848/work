<?php

use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('positions')->truncate();
        $position = [
            [
                'name' => 'IT Manager',
                'display_name' => 'IT Manager',
                'description' => '',
                'code' => 'ITM',
                'is_active' => true,
                'department_id' => '1',
            ]
        ];
        DB::table('positions')->insert($position);
    }
}
