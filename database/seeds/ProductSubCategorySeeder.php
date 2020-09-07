<?php

use Illuminate\Database\Seeder;

class ProductSubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('product_sub_categories')->truncate();
        $product_sub_category = [
            [
                'name' => '기본제품 카테고리',
                'product_category_id' => 1,
            ]
        ];
        DB::table('product_sub_categories')->insert($product_sub_category);
    }
}
