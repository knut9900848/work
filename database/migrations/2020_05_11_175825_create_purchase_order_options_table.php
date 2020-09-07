<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrderOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_order_options', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->decimal('discount', 12, 2)->nullable()->default(0);
            $table->boolean('is_use_tax')->nullable()->default(false);
            $table->decimal('shipping_fee', 12, 2)->nullable()->default(0);
            $table->string('pdf_form_type', 100);
            $table->foreignId('purchase_order_terms_and_conditions_id')->nullable();
            $table->foreignId('purchase_order_id')->constrained();
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
        Schema::dropIfExists('purchase_order_options');
    }
}
