
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePpesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ppe_category_id')->constrained();
            $table->foreignId('ppe_sub_category_id')->constrained();
            $table->foreignId('ppe_size_id')->constrained();
            $table->foreignId('ppe_type_id')->constrained();
            $table->foreignId('ppe_action_id')->constrained();
            $table->foreignId('receiver_id')->constrained('users');
            $table->foreignId('user_id')->constrained();
            $table->date('date');
            $table->unsignedInteger('amount')->default(0);
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
        Schema::dropIfExists('ppes');
    }
}
