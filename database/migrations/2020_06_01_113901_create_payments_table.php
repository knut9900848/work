<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('work_id')->constrained();
            $table->unsignedBigInteger('work_id');
            $table->foreign('work_id')->references('id')->on('works');
            $table->date('date');
            $table->foreignId('company_id')->constrained();
            $table->String('payment_method')->nullable();
            $table->string('bank')->nullable();
            $table->foreignId('currency_id')->constrained();
            $table->decimal('total_price', 12, 2)->default(0);
            $table->decimal('discount', 12, 2)->default(0);
            $table->decimal('shipping_fee', 6, 2)->default(0);
            $table->decimal('tax', 12, 2)->default(0);
            $table->decimal('grand_total', 12, 2)->default(0);
            $table->decimal('exchange_rate', 6, 2)->default(1);
            $table->decimal('exchanged_total_price', 12, 2)->default(0);
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
        Schema::dropIfExists('payments');
    }
}
