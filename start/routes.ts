/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').render('pages/home')
router.on('/account').render('pages/account').use(middleware.auth())

/**
 * Register routes
 */
router.on('/register').render('pages/register')
router.post('/register', [UsersController, 'register'])

/**
 * Logout route
 */
router
  .post('/logout', async ({ auth, response }) => {
    await auth.use('web').logout()
    return response.redirect('/login')
  })
  .use(middleware.auth())

router.on('/login').render('pages/login')
router.post('/login', [UsersController, 'login'])

router.on('/dashboard').render('pages/dashboard')
router.on('/skyjo').render('pages/skyjo')
