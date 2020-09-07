<?php

use Illuminate\Database\Seeder;

class ItemSubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('item_sub_categories')->truncate();
        $item_sub_category = [
            [
                'name' => 'Gasket',
                'item_category_id' => 1,
            ]
        ];
        DB::table('item_sub_categories')->insert($item_sub_category);
    }
}
