<?php

use Illuminate\Database\Seeder;

class MemberGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('groups')->truncate();
        $group = [
            [
                'name' => 'IES',
                'display_name' => 'IES',
                'code' => 'IES'
            ]
        ];
        DB::table('member_groups')->insert($group);
    }
}
