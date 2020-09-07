<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorksTable extends Migration
{
    /*
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('status', 20);
            $table->string('phase', 20);
            $table->string('sale_order_number')->index()->nullable();
            $table->string('invoice_number')->nullable();
            $table->date('sale_order_date')->nullable();
            $table->date('wcc_date')->nullable();
            $table->date('invoice_date')->nullable();
            $table->date('payment_date')->nullable();
            $table->unsignedSmallInteger('payment_term')->nullable();
            $table->decimal('sale_order_total_price', 12, 2)->nullable()->default(0);
            $table->decimal('invoice_total_price', 12, 2)->nullable()->default(0);
            $table->decimal('payment_total_price', 12, 2)->nullable()->default(0);
            $table->date('payment_due_date')->nullable();
            $table->decimal('payment_exchange_rate', 6, 2)->default(1);
            $table->decimal('payment_exchange_total_price', 12, 2)->default(0);
            $table->foreignId('currency_id');
            $table->string('currency_name', 20)->nullable();
            $table->string('payment_currency', 20)->nullable();
            $table->foreignId('company_id')->constrained();
            $table->foreignId('project_id')->constrained();
            $table->foreignId('sub_project_id')->constrained();
            $table->foreignId('category_id')->constrained();
            $table->foreignId('branch_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->foreignId('account_transaction_id')->nullable()->constrained();
            $table->text('description')->nullable();
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
        Schema::dropIfExists('works');
    }
}
