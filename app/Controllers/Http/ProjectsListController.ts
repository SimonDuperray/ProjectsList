import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project';
import UpdateProjectValidator from 'App/Validators/UpdateProjectValidator';

export default class ProjectsListsController {
   async index ({ view }: HttpContextContract) {
      const projects = await Project.all();
      return view.render('list/index', { 
         projects: projects,
         user: 'Simon'
      });
   }

   async create ({ view }: HttpContextContract) {
      const project = new Project()
      return view.render('list/create', {
         project: project
      });
   }

   async store ({ params, request, session, response }: HttpContextContract) {
      await this.handleRequest(params, request);
      session.flash({ success: "Your new project has been created successfully !" });
      return response.redirect().toRoute('home');
   }

   async show ({ view, params }: HttpContextContract) {
      const project = await Project.findOrFail(params.id);
      return view.render('list/show', { project: project });
   }

   async update ({ response, request, params, session }: HttpContextContract) {
      await this.handleRequest(params, request)
      session.flash({ success: "Your new project has been saved successfully!"});
      return response.redirect().toRoute('home');
   }

   private async handleRequest(params: HttpContextContract['params'], request: HttpContextContract['request']) {
      const project = params.id ? await Project.findOrFail(params.id) : new Project();
      const data = await request.validate(UpdateProjectValidator);
      project
         .merge(data)
         .save()
   }

}
