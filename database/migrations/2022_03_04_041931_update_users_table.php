<?php

use App\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // add new columns
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('name', 'username');
            $table->string('first_name', 100)->after('name');
            $table->string('last_name', 100)->after('first_name');
            $table->softDeletes();
        });

        // add role_id fk
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')
                ->after('id')
                ->default(Role::USER)
                ->constrained();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
