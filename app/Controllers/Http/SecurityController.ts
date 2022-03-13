import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SecuritiesController {
   async login ({ view }: HttpContextContract) {
      return view.render('auth/login')
   }

   async doLogin ({ request, auth, response, session }: HttpContextContract) {
      const name = request.input('name');
      const password = request.input('password');

      try {
         await auth.use('web').attempt(name, password);
         response.redirect().toRoute('home');
      } catch {
         session.flash({ error: "Wrong credentials..." })
         
         response.redirect().toRoute('login');
      } 
   }    
}
