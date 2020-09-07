<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBranchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('kor_name', 30);
            $table->string('display_name', 30);
            $table->string('street1', 100)->nullable();
            $table->string('street2', 100)->nullable();
            $table->string('city', 50)->nullable();
            $table->string('state', 50)->nullable();
            $table->string('country', 50)->nullable();
            $table->string('kor_address');
            $table->string('zipcode', 50);
            $table->string('phone', 50)->nullable();
            $table->string('fax', 50)->nullable();
            $table->string('reg_number', 50)->nullable();
            $table->string('vat_reg_number', 50)->nullable();
            $table->string('email', 100)->nullable();
            $table->string('code', 10)->unique();
            $table->boolean('is_active')->nullable()->default(false);
            $table->string('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branches');
    }
}
