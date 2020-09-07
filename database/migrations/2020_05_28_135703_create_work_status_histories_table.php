<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkStatusHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_status_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('work_id');
            $table->foreign('work_id')->references('id')->on('works');
            $table->foreignId('user_id');
            $table->string('name', 50);
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
        Schema::dropIfExists('work_status_histories');
    }
}
