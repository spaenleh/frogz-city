import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async register({ response, request, auth }: HttpContext) {
    const userData = request.only(['fullName', 'email', 'password'])
    // todo: check if email is already taken
    const user = await User.create(userData)
    await auth.use('web').login(user)
    return response.redirect(`/account`)
  }
  async login({ auth, request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return response.redirect('/account')
  }
}
