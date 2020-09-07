<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceReminderEmailHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_reminder_email_histories', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number', 100);
            $table->string('receiver_name', 50);
            $table->string('receiver_email_address');
            $table->string('receiver_timezone', 50);
            $table->string('result', 20);
            $table->unsignedSmallInteger('invoice_id');
            $table->unsignedSmallInteger('user_id');
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
        Schema::dropIfExists('invoice_reminder_email_histories');
    }
}
