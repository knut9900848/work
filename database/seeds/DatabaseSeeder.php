<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // // $this->call(UsersTableSeeder::class);
        // factory('App\Model\Admin\Bank', 1)->create();
        // factory('App\Model\Admin\Branch', 1)->create();
        // factory('App\Model\Admin\Currency', 1)->create();
        // factory('App\Model\Admin\Unit', 1)->create();
        // factory('App\Model\Admin\Country', 1)->create();
        // factory('App\Model\Admin\PaymentMethod', 1)->create();
        // factory('App\Model\Admin\Department', 1)->create();
        // factory('App\Model\Admin\Position', 1)->create();
        // factory('App\User', 1)->create();
        // factory('App\Model\Project', 1)->create();
        // factory('App\Model\Category', 1)->create();
        // factory('App\Model\SubProject', 1)->create();
        // factory('App\Model\Supplier', 1)->create();
        // factory('App\Model\SupplierEmployee', 1)->create();
        // factory('App\Model\SupplierBankAccount', 1)->create();
        // factory('App\Model\Company', 1)->create();
        // factory('App\Model\CompanyEmployee', 1)->create();
        $this->call([
            BankSeeder::class,
            BranchSeeder::class,
            CategorySeeder::class,
            CountrySeeder::class,
            CompanySeeder::class,
            DepartmentSeeder::class,
            PositionSeeder::class,
            CurrencySeeder::class,
            ItemCategorySeeder::class,
            ItemSubCategorySeeder::class,
            ManpowerDisciplineSeeder::class,
            ManpowerPositionSeeder::class,
            MemberGroupSeeder::class,
            PaymentMethodSeeder::class,
            PaymentTermsSeeder::class,
            MemberSeeder::class,
            PeopleSeeder::class,
            ProductCategorySeeder::class,
            ProductSubCategorySeeder::class,
            ProductSeeder::class,
            ProjectSeeder::class,
            SubProjectSeeder::class,
            SupplierSeeder::class,
            UnitSeeder::class,
            WorkerSeeder::class,
            PpeActionSeeder::class,
        ]);
    }
}
