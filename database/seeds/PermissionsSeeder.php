<?php

use Illuminate\Database\Seeder;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            [
                'name' => 'edit-quotation',
                'guard_name' => 'api',
            ],
            [
                'name' => 'access-quotation',
                'guard_name' => 'api',
            ],
            [
                'name' => 'approve-quotation',
                'guard_name' => 'api',
            ],
            [
                'name' => 'edit-purchase-order',
                'guard_name' => 'api',
            ],
            [
                'name' => 'access-purchase-order',
                'guard_name' => 'api',
            ],
            [
                'name' => 'approve-purchase-order',
                'guard_name' => 'api',
            ],
        ];
        DB::table('permissions')->insert($permissions);
    }
}
