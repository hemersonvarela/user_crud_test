<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    protected $seeds = [
        [
            'id' => 1,
            'username' => 'admin',
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'email' => 'admin@demo.com',
            'password' => 'admin',
            'role_id' => Role::ADMINISTRATOR,
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->seeds as $seed) {
            $user = User::firstOrNew(['id' => $seed['id']]);
            $user->username = $seed['username'];
            $user->first_name = $seed['first_name'];
            $user->last_name = $seed['last_name'];
            $user->email = $seed['email'];
            $user->email_verified_at = now();
            $user->password = Hash::make($seed['password']);
            $user->role_id = $seed['role_id'];
            $user->save();
        }
    }
}
