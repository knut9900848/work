<?php

use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('product_categories')->truncate();
        $product_category = [
            [
                'name' => '기본제품 카테고리',
            ]
        ];
        DB::table('product_categories')->insert($product_category);
    }
}
