<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('categories')->truncate();
        $category = [
            [
                'name' => 'Material',
                'display_name' => 'Material Service',
                'code' => 'MTS',
                'description' => '',
            ],
            [
                'name' => 'Manpower',
                'display_name' => 'Manpower Service',
                'code' => 'MPS',
                'description' => '',
            ],
            [
                'name' => 'Other',
                'display_name' => 'Other Service',
                'code' => 'OTS',
                'description' => '',
            ],
        ];
        DB::table('categories')->insert($category);
    }
}
