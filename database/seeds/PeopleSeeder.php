<?php

use Illuminate\Database\Seeder;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employees = [
            [
                'title' => 'Mr.',
                'name' => 'MUHUI, KIM',
                'gender' => 'Male',
                'date_of_birth' => '',
                'position' => 'Procurement Manager',
                'email' => 'muhui.kim@bhge.com',
                'phone' => '',
                'mobile' => '',
                'fax' => '',
                'timezone' => 'Europe/Rome',
                'is_active' => true,
                'description' => '',
                'peopleable_id' => 1,
                'peopleable_type' => 'App\\Model\\Company'
            ],

            [
                'title' => 'Mr.',
                'name' => 'Michael Jordan',
                'gender' => 'Male',
                'date_of_birth' => '1888-09-08',
                'position' => 'Procurement Manager',
                'email' => 'jordan23@nike.com',
                'phone' => '82 55 9877 6837',
                'mobile' => '82 10 3424 2525',
                'fax' => '82 55 2344 2448',
                'timezone' => 'Europe/Rome',
                'is_active' => true,
                'description' => '',
                'peopleable_id' => 2,
                'peopleable_type' => 'App\\Model\\Company'
            ],

            [
                'title' => 'Mr.',
                'name' => 'Waney Rooney',
                'gender' => 'Male',
                'date_of_birth' => '1990-09-08',
                'position' => 'Business Manager',
                'email' => 'Rooney@mute.com',
                'phone' => '82 55 9877 6837',
                'mobile' => '82 10 3424 2525',
                'fax' => '82 55 2344 2448',
                'timezone' => 'Europe/Rome',
                'is_active' => true,
                'description' => '',
                'peopleable_id' => 3,
                'peopleable_type' => 'App\\Model\\Company'
            ],

            [
                'title' => 'Mr.',
                'name' => 'Kim Do Boo',
                'gender' => 'Male',
                'date_of_birth' => '1888-09-08',
                'position' => 'Procurement Manager',
                'email' => 'dooboo@ccaboo.com',
                'phone' => '82 55 9877 6837',
                'mobile' => '82 10 3424 2525',
                'fax' => '82 55 2344 2448',
                'timezone' => 'Europe/Rome',
                'is_active' => true,
                'description' => '',
                'peopleable_id' => 4,
                'peopleable_type' => 'App\\Model\\Supplier'
            ],
        ];
        DB::table('people')->insert($employees);
    }
}
