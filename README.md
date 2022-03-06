## User CRUD test by Hemerson
This is a simple demo user management CRUD application built with Laravel, Inertia.js, Tailwind, React And Docker

## System requirements 
- Docker Desktop
- PHP/composer

## Installation

Clone the repo locally:

```sh
git clone https://github.com/hemersonvarela/user_crud_test.git
cd user_crud_test/
```

Install PHP dependencies
```sh
composer install
```

Setup app configuration
```sh
cp .env.example .env
```

Set a bash alias for sail
```sh
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
```

Start sail services
```sh
sail up -d
```

Generate application key
```sh
sail artisan key:generate
```

Run database migrations
```sh
sail artisan migrate
```

Run database seeders
```sh
sail artisan db:seed
```

Install NPM dependencies
```sh
sail npm install
```

Build assets:

```sh
sail npm run dev
```

Open URL in your browser
```sh
http://laravel.test.localhost/
```
