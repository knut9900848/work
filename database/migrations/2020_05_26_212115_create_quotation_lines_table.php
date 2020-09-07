<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotation_lines', function (Blueprint $table) {
            $table->id();
            $table->string('title', 50)->default('Line Title');
            $table->foreignId('quotation_id')->constrained();
            $table->text('description');
            $table->string('name')->nullable();
            $table->string('size', 100)->nullable();
            $table->decimal('price', 12, 2);
            $table->decimal('quantity', 10, 2);
            $table->string('unit');
            $table->string('delivery_status')->nullable();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('item_category_id')->constrained();
            $table->foreignId('item_sub_category_id')->constrained();
            $table->unsignedSmallInteger('order');
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
        Schema::dropIfExists('quotation_lines');
    }
}
