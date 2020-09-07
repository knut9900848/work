<?php

use Illuminate\Database\Seeder;

class ItemCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('item_categories')->truncate();
        $category = [
            [
                'name' => 'Material',
            ]
        ];
        DB::table('item_categories')->insert($category);
    }
}
