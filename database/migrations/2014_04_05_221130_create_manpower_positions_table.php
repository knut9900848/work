<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManpowerPositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('manpower_positions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('display_name', 30);
            $table->string('code', 10)->unique();
            $table->boolean('is_active')->nullable()->default(false);
            $table->string('description')->nullable();
            $table->foreignId('manpower_discipline_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('manpower_positions');
    }
}
