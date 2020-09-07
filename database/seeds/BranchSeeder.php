<?php

use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('branches')->truncate();
        $branch = [
            [
                'name' => 'Intrust Energy Solution',
                'kor_name' => '인트러스트 에너지 솔루션',
                'display_name' => 'IES 울산 본사',
                'street1' => '#208, 162 Hwahap-ro',
                'street2' => '',
                'city' => 'Nam-gu',
                'state' => 'Ulsan',
                'country' => 'South Korea',
                'kor_address' => '울산광역시 남구 화합로 162 나인파크 208호',
                'zipcode' => '44715',
                'phone' => '+82 (0)52 252 9834',
                'fax' => '+82 (0)52 252 9839',
                'vat_reg_number' => '786-88-00117',
                'email' => 'contact@intrustenergysolution.com',
                'code' => 'HQ',
                'is_active' => true,
                'description' => '울산본사'
            ]
        ];
        DB::table('branches')->insert($branch);
    }
}
