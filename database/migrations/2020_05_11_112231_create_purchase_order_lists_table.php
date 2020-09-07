<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrderListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_order_lists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('purchase_order_id');
            $table->string('number');
            $table->string('sr_number', 100)->nullable();
            $table->string('company', 100);
            $table->string('project', 100);
            $table->string('category', 100);
            $table->string('currency', 20);
            $table->string('branch', 100);
            $table->string('supplier', 100);
            $table->date('issued_date')->index();
            $table->string('ref_quote')->nullable();
            $table->string('delivery_address')->nullable();
            $table->string('delivery_terms')->nullable();
            $table->string('delivery_date')->nullable();
            $table->date('payment_due_date')->nullable();
            $table->date('payment_date')->nullable();
            $table->decimal('total_price', 12, 2)->nullable()->default(0);
            $table->decimal('shipping_fee', 12, 2)->nullable()->default(0);
            $table->decimal('discount', 12, 2)->nullable()->default(0);
            $table->decimal('tax', 12, 2)->nullable()->default(0);
            $table->decimal('grand_total', 12, 2)->nullable()->default(0);
            $table->string('status');
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
        Schema::dropIfExists('purchase_order_lists');
    }
}
