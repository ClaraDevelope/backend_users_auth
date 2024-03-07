const { isAuth, isAdmin } = require('../../middleware/auth')
const {
  getContenido,
  postContenido,
  updateContenido,
  deleteContenido
} = require('../controllers/contenido')

const contenidoRouter = require('express').Router()

contenidoRouter.get('/', getContenido)
contenidoRouter.post('/', [isAuth], postContenido)
contenidoRouter.put('/:id', [isAdmin], updateContenido)
contenidoRouter.delete('/:id', [isAdmin], deleteContenido)

module.exports = { contenidoRouter }
