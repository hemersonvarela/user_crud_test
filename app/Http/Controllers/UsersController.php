<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\RoleResource;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    /**
     * Display and filter a listing of users
     * @param Request $request
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Users/Index', [
            'filters' => $request->all('search', 'role', 'trashed'),
            'roles' => RoleResource::collection(Role::all()),
            'users' => UserResource::collection(
                User::with(['role:id,name'])
                    ->orderByName()
                    ->filter($request->only(['search', 'role', 'trashed']))
                    ->paginate(5)
                    ->appends($request->all())
            ),
        ]);
    }

    /**
     * Show the form for creating a new user
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Users/Create', [
            'roles' => RoleResource::collection(Role::all())
        ]);
    }

    /**
     * Store a newly created user in storage
     * @param UserRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(UserRequest $request)
    {
        User::create(
            $request->validated()
        );

        return Redirect::route('users')->with('success', 'User created');
    }

    /**
     * Show the form for editing the specified user
     * @param User $user
     * @return \Inertia\Response
     */
    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => new UserResource($user->load('role:id,name')),
            'roles' => RoleResource::collection(Role::all())
        ]);
    }

    /**
     * Update the specified user in storage
     * @param User $user
     * @param UserRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(User $user, UserRequest $request)
    {
        $user->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'User updated');
    }

    /**
     * Remove the specified user from storage.
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::back()->with('success', 'User deleted');
    }

}
