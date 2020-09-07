<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLaborWagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('labor_wages', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('display_name', 30);
            $table->unsignedDecimal('multiple', 5,2);
            $table->time('from', 0);
            $table->time('to', 0);
            $table->string('description')->nullable();
            $table->boolean('is_active')->nullable()->default(false);
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
        Schema::dropIfExists('labor_wages');
    }
}
