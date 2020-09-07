<?php

use Illuminate\Database\Seeder;

class SubProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('sub_projects')->truncate();
        $sub_projects = [
            [
                'name' => 'BHGE Coral FLNG Project',
                'display_name' => 'BHGE Coral FLNG Project',
                'project_id' => '1',
                'company_id' => '1',
                'code' => 'BHGECOR',
                'description' => '',
                'is_active' => false,
            ],
            [
                'name' => 'OMB Coral FLNG PROJECT',
                'display_name' => 'OMB Coral FLNG PROJECT',
                'project_id' => '1',
                'company_id' => '1',
                'code' => 'OMBCORAL',
                'description' => '프로젝트 공통',
                'is_active' => false,
            ],
            [
                'name' => 'Emerson Coral FLNG Project',
                'display_name' => 'Emerson Coral FLNG Project',
                'project_id' => '1',
                'company_id' => '1',
                'code' => 'SUB3',
                'description' => '프로젝트 공통',
                'is_active' => false,
            ]
        ];
        DB::table('sub_projects')->insert($sub_projects);
    }
}
