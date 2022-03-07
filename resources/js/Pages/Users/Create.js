import React from 'react';
import {Head, usePage, useForm} from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import Button from "@/Components/Button";

export default function Create(props) {
    const {roles} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        role_id: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create User</h2>}
        >
            <Head title="Create User"/>
            <div className="flex justify-center">
                <div className="max-w-3xl overflow-hidden bg-white rounded shadow mt-4 md:flex md:justify-center mb-6">
                    <form name="createForm"  onSubmit={handleSubmit}>
                        <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="First Name"
                                name="first_name"
                                type="text"
                                errors={errors.first_name}
                                value={data.first_name}
                                onChange={e => setData('first_name', e.target.value)}
                            />
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="Last Name"
                                name="last_name"
                                type="text"
                                errors={errors.last_name}
                                value={data.last_name}
                                onChange={e => setData('last_name', e.target.value)}
                            />
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="UserName"
                                name="username"
                                type="text"
                                errors={errors.username}
                                value={data.username}
                                onChange={e => setData('username', e.target.value)}
                            />
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="Email"
                                name="email"
                                type="email"
                                errors={errors.email}
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                            <TextInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="Password"
                                name="password"
                                type="password"
                                errors={errors.password}
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                            <SelectInput
                                className="w-full pb-8 pr-6 lg:w-1/2"
                                label="Role"
                                name="role_id"
                                errors={errors.role_id}
                                onChange={e => setData('role_id', e.target.value)}
                            >
                                {roles.map((item, i) =>
                                    <option key={i} value={item.id}>
                                        {item.name}
                                    </option>
                                )}
                            </SelectInput>
                        </div>
                        <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                            <Button className="ml-4" processing={processing}>
                                Create
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Authenticated>
    );
};
