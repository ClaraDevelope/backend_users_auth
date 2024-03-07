const { isAdmin } = require('../../middleware/auth')
const {
  getPlataformas,
  postPlataformas,
  updatePlataformas,
  deletePlataformas
} = require('../controllers/plataformas')

const plataformasRouter = require('express').Router()

plataformasRouter.get('/', getPlataformas)
plataformasRouter.post('/', [isAdmin], postPlataformas)
plataformasRouter.put('/:id', [isAdmin], updatePlataformas)
plataformasRouter.delete('/:id', [isAdmin], deletePlataformas)

module.exports = { plataformasRouter }
