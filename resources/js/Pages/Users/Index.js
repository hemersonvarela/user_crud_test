import React from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import SearchFilter from '@/Components/SearchFilter';
import Pagination from '@/Components/Pagination';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import IconDelete from "@/Components/IconDelete";
import { BsFillPencilFill } from "react-icons/bs";
import Button from "@/Components/Button";

export default function Index(props) {
    const { users } = usePage().props;
    const {
        data,
        meta: { links }
    } = users;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <SearchFilter />
                                <InertiaLink
                                  href={route('users.create')}
                                >
                                    <Button className="mr-4 mt-4" processing={false}>
                                        Create
                                    </Button>
                                </InertiaLink>
                            </div>

                            <div className="overflow-x-auto bg-white rounded shadow">
                                <table className="w-full whitespace-nowrap">
                                    <thead>
                                    <tr className="font-bold text-left">
                                        <th className="px-6 pt-5 pb-4">UserName</th>
                                        <th className="px-6 pt-5 pb-4">User Full Name</th>
                                        <th className="px-6 pt-5 pb-4">Email</th>
                                        <th className="px-6 pt-5 pb-4">Role</th>
                                        <th className="px-6 pt-5 pb-4">Created</th>
                                        <th className="px-6 pt-5 pb-4">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map(({ id, username, full_name , email, role, created_at }) => {
                                        return (
                                            <tr
                                                key={id}
                                                className="hover:bg-gray-100 focus-within:bg-gray-100"
                                            >
                                                <td className="border-t">
                                                    <InertiaLink
                                                        href={route('users.edit', id)}
                                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                    >
                                                        {username}
                                                    </InertiaLink>
                                                </td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        href={route('users.edit', id)}
                                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                    >
                                                        {full_name}
                                                    </InertiaLink>
                                                </td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        tabIndex="-1"
                                                        href={route('users.edit', id)}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {email}
                                                    </InertiaLink>
                                                </td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        tabIndex="-1"
                                                        href={route('users.edit', id)}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {role.name}
                                                    </InertiaLink>
                                                </td>
                                                <td className="border-t">
                                                    <InertiaLink
                                                        tabIndex="-1"
                                                        href={route('users.edit', id)}
                                                        className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                    >
                                                        {created_at}
                                                    </InertiaLink>
                                                </td>
                                                <td className="w-px border-t">
                                                    <div className="flex items-center w-full">
                                                        <InertiaLink className="mr-2" href={route('users.edit', id)}>
                                                            <BsFillPencilFill size="1.3em"></BsFillPencilFill>
                                                        </InertiaLink>
                                                        <br/>
                                                        <IconDelete id={id} />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {data.length === 0 && (
                                        <tr>
                                            <td className="px-6 py-4 border-t" colSpan="4">
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={links} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
