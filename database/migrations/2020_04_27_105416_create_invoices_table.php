<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('number', 100);
            $table->date('date');
            $table->foreignId('originator_id');
            $table->foreignId('requestor_id');
            $table->date('payment_due_date');
            $table->decimal('total_price', 12, 2)->nullable()->default(0);
            $table->decimal('tax', 12, 2)->nullable()->default(0);
            $table->decimal('discount', 12, 2)->nullable()->default(0);
            $table->decimal('shipping_fee', 12, 2)->nullable()->default(0);
            $table->decimal('grand_total', 12, 2)->nullable()->default(0);
            $table->string('deliver_to')->nullable()->default('N/A');
            $table->unsignedSmallInteger('payment_term');
            $table->foreignId('work_id')->constrained();
            $table->foreignId('bank_id');
            $table->string('project_number')->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
