<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Run seeders for
        $this->call(RolesSeeder::class);
        $this->call(UsersSeeder::class);

        // Run factories
        User::factory(25)->create();
    }
}
