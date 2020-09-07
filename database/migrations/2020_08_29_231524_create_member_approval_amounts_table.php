<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberApprovalAmountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_approval_amounts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('display_name');
            $table->decimal('amount', 10, 2);
            $table->foreignId('user_id')->constrained();
            $table->string('description')->nullable();
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
        Schema::dropIfExists('member_approval_amounts');
    }
}
