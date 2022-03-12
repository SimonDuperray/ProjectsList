import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProjectsListsController {
   async index ({ view }: HttpContextContract) {
      return view.render('index', {
         user: 'Simon'
      });
   }
}
