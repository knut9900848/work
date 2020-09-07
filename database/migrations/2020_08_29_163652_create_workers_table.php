<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('kor_name', 30)->nullable();
            $table->string('gender', 10);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->foreignId('manpower_discipline_id')->constrained();
            $table->foreignId('manpower_position_id')->constrained();
            $table->boolean('is_active')->nullable()->default(false);
            $table->string('mobile', 20)->nullable()->default('text');
            $table->string('phone', 20)->nullable()->default('text');
            $table->string('uuid')->nullable()->default('text');
            $table->string('avatar')->nullable();
            $table->decimal('wage')->nullable()->default(0);
            $table->string('year_of_birth')->nullable();
            $table->unsignedInteger('years_of_experienced')->default(1);
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
        Schema::dropIfExists('workers');
    }
}
