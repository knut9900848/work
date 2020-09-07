<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSupplierBankAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('supplier_bank_accounts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('display_name', 50);
            $table->string('bank_name', 50);
            $table->string('account_owner', 50);
            $table->string('account_number', 50);
            $table->string('description', 255)->nullable();
            $table->boolean('is_active')->nullable()->default(false);
            $table->foreignId('supplier_id')->constrained();
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
        Schema::dropIfExists('supplier_bank_accounts');
    }
}
