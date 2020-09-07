<?php

use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('products')->truncate();
        $product = [
            [
                'name' => '기본제품',
                'description' => '기본제품 설명',
                'price' => 1000,
                'quantity' => 100,
                'product_category_id' => 1,
                'product_sub_category_id' => 1,
            ]
        ];
        DB::table('products')->insert($product);
    }
}
