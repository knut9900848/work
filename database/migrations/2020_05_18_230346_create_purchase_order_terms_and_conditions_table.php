<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrderTermsAndConditionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_order_terms_and_conditions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('file_name', 50);
            $table->string('file_origin_name');
            $table->string('extension', 5);
            $table->string('mime_type', 20);
            $table->string('description')->nullable();
            $table->boolean('is_active')->default(0);
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
        Schema::dropIfExists('purchase_order_terms_and_conditions');
    }
}
