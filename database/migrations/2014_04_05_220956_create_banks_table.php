<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBanksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banks', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('kor_name', 30)->nullable();
            $table->string('display_name', 30)->nullable();
            $table->string('account_number', 30);
            $table->string('swift_code', 30)->nullable();
            $table->string('address', 100)->nullable();;
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
        Schema::dropIfExists('banks');
    }
}
