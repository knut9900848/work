<?php

use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('departments')->truncate();
        $department = [
            [
                'name'  => 'Business',
                'display_name' => 'Business',
                'code' => 'BSN',
                'description' => '영업부',
                'is_active' => true,
                'branch_id' => '1',
            ]
        ];
        DB::table('departments')->insert($department);
    }
}
