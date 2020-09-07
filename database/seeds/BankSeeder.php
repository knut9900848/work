<?php

use Illuminate\Database\Seeder;

class BankSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('banks')->truncate();
        $bank = [
            [
                'name' => 'Industrial Bank of Korea',
                'kor_name' => '산업은행',
                'display_name' => '산업은행 달러 계좌',
                'account_number' => '346-131350-56-00011',
                'swift_code' => 'IBKOKRSEXXX',
                'address' => '50, Ulchiro 2-ga, Chung-gu, Seoul, 100-758, SOUTH KOREA',
                'is_active' => true,
                'description' => '',
            ],
            [
                'name' => 'SHINHAN BANK',
                'kor_name' => '신한은행',
                'display_name' => '신한은행 달러 계좌',
                'account_number' => '180-007-066558',
                'swift_code' => 'SHBKKRSE',
                'address' => '20, SEJONG-DAERO 9-GIL, JUNG-GU, SEOUL, SOUTH KOREA',
                'is_active' => true,
                'description' => '',
            ]
        ];
        DB::table('banks')->insert($bank);
    }
}
