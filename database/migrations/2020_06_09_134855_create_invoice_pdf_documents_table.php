<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicePdfDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoice_pdf_documents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('origin_name');
            $table->unsignedSmallInteger('version');
            $table->string('extension', 10);
            $table->foreignId('user_id')->constrained();
            $table->foreignId('invoice_id')->constrained();
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
        Schema::dropIfExists('invoice_pdf_documents');
    }
}
