import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <p className="mt-5 text-lg font-bold">This is a simple demo user management CRUD application built with Laravel, Inertia.js, Tailwind, React And Docker.</p>

                            <p className="mt-5 text-lg">Just for Fun!, The main goal here is just to learn a little more of Inertia.js and Tailwind CSS</p>

                            <p className="mt-5 text-base">Laravel Framework features included in this demo</p>
                            <ul className="ml-5 mt-3 list-disc">
                                <li>Routing</li>
                                <li>Implicit Binding</li>
                                <li>Middleware</li>
                                <li>Soft Deletes</li>
                                <li>Api Resources</li>
                                <li>Database Migrations</li>
                                <li>Database Seeders</li>
                                <li>Factories</li>
                                <li>FormRequest</li>
                                <li>Accessors</li>
                                <li>Query Scopes</li>
                                <li>Pagination</li>
                                <li>Laravel Breeze</li>
                                <li>Laravel Sail</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
