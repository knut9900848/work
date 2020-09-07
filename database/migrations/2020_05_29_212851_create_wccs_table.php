<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWccsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wccs', function (Blueprint $table) {
            $table->id();
            $table->unsignedSmallInteger('approver_id');
            $table->unsignedBigInteger('work_id');
            $table->foreign('work_id')->references('id')->on('works');
            $table->date('date');
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
        Schema::dropIfExists('wccs');
    }
}
