<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_config', function (Blueprint $table) {
            $table->id();
            $table->string('author', 255);
            $table->string('email', 255);
            $table->string('phone', 255);
            $table->string('zalo', 255);
            $table->string('facebook', 255);
            $table->string('adress', 255);
            $table->string('you', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_config');
    }
};
