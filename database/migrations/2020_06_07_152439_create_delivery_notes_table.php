<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_notes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quotation_line_id')->constrained()->onDelete('cascade');
            $table->string('line_description');
            $table->decimal('price', 12, 2);
            $table->string('currency', 10);
            $table->string('status', 20);
            $table->string('quotation_project');
            $table->string('quotation_number');
            $table->string('quotation_sr_number')->nullable();
            $table->date('quotation_issued_date')->index();
            $table->string('sale_order_number')->nullable();
            $table->date('invoice_date')->nullable();
            $table->date('invoice_payment_due_date')->nullable();
            $table->date('payment_received_date')->nullable();
            $table->date('delivered')->nullable();
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
        Schema::dropIfExists('delivery_notes');
    }
}
