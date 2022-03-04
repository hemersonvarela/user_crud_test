<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesSeeder extends Seeder
{
    protected $seeds = [
        [
            'id' => Role::ADMINISTRATOR,
            'name' => 'Administrator',
        ],
        [
            'id' => Role::USER,
            'name' => 'User',
        ],
        [
            'id' => Role::CLIENT,
            'name' => 'Client',
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
            $group = Role::firstOrNew(['id' => $seed['id']]);
            $group->name = $seed['name'];
            $group->save();
        }
    }
}
