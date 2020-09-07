<?php

use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('projects')->truncate();
        $project = [
            [
                'name' => 'Coral FLNG Project',
                'display_name' => '삼성 코랄 프로젝트',
                'status' => 'Normal',
                'company_id' => '1',
                'code' => 'CORAL',
                'description' => '',
            ]
        ];
        DB::table('projects')->insert($project);
    }
}
