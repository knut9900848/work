<?php

use Illuminate\Database\Seeder;

class WorkerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('units')->truncate();
        $workers = [
            [
                'name' => 'Sung-chan Kim',
                'kor_name' => '김성찬',
                'gender' => 'male',
                'email' => 'sc.kim@naver.com',
                'password' => bcrypt('!ies2015'),
                'manpower_position_id' => 1,
                'manpower_discipline_id' => 1,
                'is_active' => true,
                'mobile' => '+82 10 2242 9835',
                'phone' => '',
                'uuid' => '',
                'avatar' => '',
                'wage' => '150000',
                'year_of_birth' => '1999',
                'years_of_experienced' => '10',
            ],
            [
                'name' => 'Steve Yoo',
                'kor_name' => '유용훈',
                'gender' => 'male',
                'email' => 'knut9900848@gmail.com',
                'password' => bcrypt('!ies2015'),
                'manpower_position_id' => 1,
                'manpower_discipline_id' => 1,
                'is_active' => true,
                'mobile' => '+82 10 2242 9835',
                'phone' => '',
                'uuid' => '',
                'avatar' => '',
                'wage' => '300000',
                'year_of_birth' => '1980',
                'years_of_experienced' => '5',
            ],
        ];
        DB::table('workers')->insert($workers);
    }
}
