<?php

use Illuminate\Database\Seeder;

class ManpowerDisciplineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('manpower_desciplines')->truncate();
        $manpower_descipline = [
            [
                'name' => 'Mechnical',
                'display_name' => '기계',
                'code' => 'MEC',
                'description' => '',
                'is_active' => true,
            ]
        ];
        DB::table('manpower_disciplines')->insert($manpower_descipline);
    }
}
