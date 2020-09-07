<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotation_options', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->decimal('discount', 10, 0)->nullable()->default(0);
            $table->decimal('shipping_fee', 10, 0)->nullable()->default(0);
            $table->boolean('is_use_tax')->nullable()->default(false);
            $table->boolean('is_use_description')->nullable()->default(false);
            $table->string('pdf_form_type', 100)->default('default');
            $table->foreignId('quotation_id')->constrained();
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
        Schema::dropIfExists('quotation_options');
    }
}
