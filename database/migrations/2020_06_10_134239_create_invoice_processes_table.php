<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoiceProcessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_processes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedSmallInteger('user_id');
            $table->string('message')->nullable();
            $table->foreignId('invoice_pdf_document_id')->constrained();
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
        Schema::dropIfExists('invoice_processes');
    }
}
