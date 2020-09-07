<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationProcessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotation_processes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedSmallInteger('user_id');
            $table->string('message')->nullable();
            $table->foreignId('quotation_pdf_document_id')->constrained();
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
        Schema::dropIfExists('quotation_processes');
    }
}
