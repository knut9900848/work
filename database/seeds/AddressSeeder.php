<?php

use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $addresses = [
            [
                "name" => "Bill address",
                "street1" => "Via Felice Matteucci 2",
                "street2" => "",
                "city" => "",
                "state" => "",
                "zipcode" => "24069",
                "country" => "Italy",
                "description" => "",
                "addressable" => "App\\Model\\Company",
                "addressable" => "1",
            ],
            [
                "name" => "Bill address",
                "street1" => "Via Europa, 7 Cenate Sotto (BG)",
                "street2" => "",
                "city" => "",
                "state" => "",
                "zipcode" => "24069",
                "country" => "Italy",
                "description" => "",
                "addressable" => "App\\Model\\Company",
                "addressable" => "2",

            ],
            [
                "name" => "한국에머슨 자동화 솔루션 사업부",
                "street1" => "다산로 26",
                "street2" => "",
                "city" => "사하구",
                "state" => "부산광역시",
                "zipcode" => "49500",
                "country" => "대한민국",
                "description" => "",
                "addressable" => "App\\Model\\Company",
                "addressable" => "3",
            ]
        ];
        DB::table('addresses')->insert($addresses);
    }
}
