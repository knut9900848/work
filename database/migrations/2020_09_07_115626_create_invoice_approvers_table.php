<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceApproversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_approvers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('manager_id')->constrained('users');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('invoice_id')->constrained();
            $table->unsignedSmallInteger('order')->nullable()->default(1);
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
        Schema::dropIfExists('invoice_approvers');
    }
}
