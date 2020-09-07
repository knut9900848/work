<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceIesRemindersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_ies_reminders', function (Blueprint $table) {
            $table->id();
            $table->string('number', 100);
            $table->string('name', 50);
            $table->string('email');
            $table->string('timezone', 50);
            $table->foreignId('invoice_id')->constrained();
            $table->foreignId('user_id')->constrained();
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
        Schema::dropIfExists('invoice_ies_reminders');
    }
}
