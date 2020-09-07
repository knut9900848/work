<?php

use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('companies')->truncate();
        $company = [
            [
                'name' => 'Nuovo Pignone International S.r.l.',
                'display_name' => 'BHGE',
                'phone' => '',
                'email' => '',
                'fax' => '',
                'url' => '',
                'reg_number' => '',
                'code' => 'BHGE',
                'logo' => '',
                'is_active' => true,
                'description' => ''
            ],
            [
                'name' => 'OMB Valves SpA',
                'display_name' => 'OMB',
                'phone' => '',
                'email' => '',
                'fax' => '',
                'url' => '',
                'reg_number' => '',
                'code' => 'OMB',
                'logo' => '',
                'is_active' => true,
                'description' => ''
            ],
            [
                'name' => 'Emerson',
                'display_name' => 'Emerson',
                'phone' => '',
                'email' => '',
                'fax' => '',
                'url' => '',
                'reg_number' => '',
                'code' => 'EMR',
                'logo' => '',
                'is_active' => true,
                'description' => ''
            ]
        ];
        DB::table('companies')->insert($company);
    }
}
