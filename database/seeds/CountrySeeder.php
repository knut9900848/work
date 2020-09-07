<?php

use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('countries')->truncate();
        $country = [
            [
                'name' => 'Italy',
                'display_name' => 'Italy',
                'code' => 'ITA',
            ],
            [
                'name' => 'South Korea',
                'display_name' => 'South Korea',
                'code' => 'KOR',
            ]
        ];
        DB::table('countries')->insert($country);
    }
}
