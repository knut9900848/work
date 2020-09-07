<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('kor_name', 30)->nullable();
            $table->string('gender', 10);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->string('position', 30);
            $table->string('kor_position', 30);
            $table->boolean('is_active')->nullable()->default(false);
            $table->string('mobile', 20)->nullable()->default('text');
            $table->string('phone', 20)->nullable()->default('text');
            $table->string('uuid')->nullable()->default('text');
            $table->string('avatar')->nullable();
            $table->date('start_work_date')->nullable();
            $table->date('resignation_date')->nullable();
            $table->string('timezone', 50)->nullable();
        
            $table->foreignId('member_group_id')->constrained();
            $table->foreignId('branch_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->foreignId('position_id')->constrained();
        
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
        Schema::dropIfExists('users');
    }
}
