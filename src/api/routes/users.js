const { isAdmin } = require('../../middleware/auth')
const {
  updateUsers,
  getUsers,
  register,
  deleteUsers,
  login,
  logout
} = require('../controllers/users')

const usersRouter = require('express').Router()

usersRouter.get('/', [isAdmin], getUsers)
usersRouter.post('/register', register)
usersRouter.put('/:id', [isAdmin], updateUsers)
usersRouter.delete('/:id', [isAdmin], deleteUsers)
usersRouter.post('/login', login)
usersRouter.post('/logout', logout)

module.exports = { usersRouter }
