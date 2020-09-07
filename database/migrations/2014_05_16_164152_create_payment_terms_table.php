<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_terms', function (Blueprint $table) {
            $table->id();
            $table->string('name', 30);
            $table->string('display_name', 30);
            $table->unsignedSmallInteger('terms')->nullable()->default(0);
            $table->unsignedSmallInteger('discount')->nullable()->default(0);
            $table->unsignedSmallInteger('in_days')->nullablee()->default(0);
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
        Schema::dropIfExists('payment_terms');
    }
}
