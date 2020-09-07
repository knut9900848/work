<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceClientRemindersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_client_reminders', function (Blueprint $table) {
            $table->id();
            $table->string('number', 100);
            $table->string('name', 50);
            $table->string('email');
            $table->string('timezone', 50);
            $table->foreignId('invoice_id')->constrained();
            $table->foreignId('people_id')->constrained();
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
        Schema::dropIfExists('invoice_client_reminders');
    }
}
