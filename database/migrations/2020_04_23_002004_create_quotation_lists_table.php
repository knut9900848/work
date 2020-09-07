<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotation_lists', function (Blueprint $table) {
            $table->id();
            $table->string('number', 100);
            $table->string('sr_number', 100)->nullable();
            $table->string('company', 100);
            $table->string('project', 100);
            $table->string('sub_project', 100);
            $table->string('category', 100);
            $table->string('branch', 100);
            $table->string('currency', 100);
            $table->string('status', 30);
            $table->date('issued_date')->index();
            $table->string('receiver')->nullable();
            $table->string('originator')->nullable();
            $table->smallInteger('valid_terms')->unsigned()->nullable();
            $table->date('expired_date')->nullable();
            $table->decimal('total_price', 12, 2)->nullable()->default(0);
            $table->decimal('discount', 12, 2)->nullable()->default(0);
            $table->decimal('tax', 12, 2)->nullable()->default(0);
            $table->decimal('grand_total', 12, 2)->nullable()->default(0);
            $table->string('sale_order_number')->nullable();
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
        Schema::dropIfExists('quotation_lists');
    }
}
