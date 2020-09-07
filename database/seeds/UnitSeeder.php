<?php

use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('units')->truncate();
        $units = [
            [
                'name' => 'EA',
                'display_name' => 'Each',
                'description' => '',
                'is_active' => true,
            ],
            [
                'name' => 'Set',
                'display_name' => 'Set',
                'description' => '',
                'is_active' => true,
            ],
            [
                'name' => 'Kg',
                'display_name' => 'Kg',
                'description' => 'Kilogram',
                'is_active' => true,
            ],
            [
                'name' => 'g',
                'display_name' => 'g',
                'description' => 'Gram',
                'is_active' => true,
            ],
        ];
        DB::table('units')->insert($units);
    }
}
