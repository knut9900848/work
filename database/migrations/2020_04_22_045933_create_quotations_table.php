<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuotationsTable extends Migration
{
    /*
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quotations', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->date('issued_date')->index();
            $table->foreignId('receiver_id');
            $table->foreignId('originator_id');
            $table->string('sr_number', 50)->nullable();
            $table->decimal('total_price', 12, 2)->nullable()->default(0);
            $table->decimal('tax', 12, 2)->nullable()->default(0);
            $table->decimal('discount', 12, 2)->nullable()->default(0);
            $table->decimal('shipping_fee', 12, 2)->nullable()->default(0);
            $table->decimal('grand_total', 12, 2)->nullable()->default(0);
            $table->smallInteger('valid_terms')->unsigned()->nullable();
            $table->date('expired_date')->nullable();
            $table->boolean('is_emergency')->default(0);
            $table->text('remarks')->nullable();
            $table->text('summary')->nullable();
            $table->text('description')->nullable();
            $table->string('status', 20);
            $table->foreignId('company_address_id');

            $table->foreignId('work_id')->nullable();
            $table->foreignId('company_id')->constrained();
            $table->foreignId('project_id')->constrained();
            $table->foreignId('sub_project_id')->constrained();
            $table->foreignId('category_id')->constrained();
            $table->foreignId('currency_id')->constrained();
            $table->foreignId('branch_id')->constrained();
            $table->foreignId('department_id')->constrained();

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
        Schema::dropIfExists('quotations');
    }
}
