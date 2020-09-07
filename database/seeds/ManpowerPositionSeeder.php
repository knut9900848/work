<?php

use Illuminate\Database\Seeder;

class ManpowerPositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('manpower_positions')->truncate();
        $manpower_position = [
            [
                'name' => 'Technician',
                'display_name' => 'Technician',
                'code' => 'TEC',
                'is_active' => true,
                'description' => '',
                'manpower_discipline_id' => '1'
            ]
        ];
        DB::table('manpower_positions')->insert($manpower_position);
    }
}
