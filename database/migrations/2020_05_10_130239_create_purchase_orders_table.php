<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchaseOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('sr_number', 100)->nullable();
            $table->foreignId('company_id')->constrained();
            $table->foreignId('project_id')->constrained();
            $table->foreignId('sub_project_id')->constrained();
            $table->foreignId('department_id')->constrained();
            $table->foreignId('branch_id')->constrained();
            $table->foreignId('category_id')->constrained();
            $table->foreignId('currency_id')->constrained();
            $table->foreignId('supplier_id')->constrained();
            $table->foreignId('originator_id');
            $table->foreignId('receiver_id');
            $table->date('issued_date');
            $table->string('ref_quote')->nullable();
            $table->string('delivery_address')->nullable();
            $table->date('delivery_date')->nullable();
            $table->date('payment_due_date')->nullable();
            $table->date('payment_date')->nullable();
            $table->decimal('total_price', 12, 2)->nullable()->default(0);
            $table->decimal('tax', 12, 2)->nullable()->default(0);
            $table->decimal('discount', 12, 2)->nullable()->default(0);
            $table->decimal('grand_total', 12, 2)->nullable()->default(0);
            $table->decimal('shipping_fee', 12, 2)->nullable()->default(0);
            $table->boolean('is_emergency')->default(0);
            $table->text('remarks')->nullable();
            $table->text('summary')->nullable();
            $table->string('status', 20);
            $table->foreignId('supplier_address_id');
            $table->foreignId('work_id')->nullable()->constrained();
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
        Schema::dropIfExists('purchase_orders');
    }
}
