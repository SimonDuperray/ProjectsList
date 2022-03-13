/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
   Route.get('/projects/:id', 'ProjectsListController.show').as('projects.show')
   Route.get('projects/:id/remove', 'ProjectsListController.remove').as('projects.remove')
   Route.post('/projects/:id', 'ProjectsListController.update')
   Route.get('/project/new', 'ProjectsListController.create').as('projects.create')
   Route.post('/project/new', 'ProjectsListController.store')
}).middleware('auth')

Route.get('/', 'ProjectsListController.index').as('home')
Route.get('/login', 'SecurityController.login').as('login')
Route.post('/login', 'SecurityController.doLogin')