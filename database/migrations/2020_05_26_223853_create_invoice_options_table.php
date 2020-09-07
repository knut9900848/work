<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_options', function (Blueprint $table) {
            $table->id();
            $table->decimal('discount', 10, 2)->nullable()->default(0);
            $table->decimal('shipping_fee', 10, 2)->nullable()->default(0);
            $table->boolean('is_use_tax')->nullable()->default(false);
            $table->string('pdf_form_type', 100)->default('default');
            $table->foreignId('invoice_id')->constrained();
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
        Schema::dropIfExists('invoice_options');
    }
}
