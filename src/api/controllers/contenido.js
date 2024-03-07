const Contenido = require('../models/contenido')

const getContenido = async (req, res, next) => {
  try {
    const contenidos = await Contenido.find().populate('plataformas')
    return res.status(200).json(contenidos)
  } catch (error) {
    return res.status(400).json('Error al hacer get de los contenidos')
  }
}

const postContenido = async (req, res, next) => {
  try {
    const newContenido = new Contenido(req.body)
    const contenidos = await newContenido.save()
    return res.status(201).json(contenidos)
  } catch (error) {
    return res.status(400).json('Error al hacer post de los contenidos')
  }
}

const updateContenido = async (req, res, next) => {
  try {
    const { id } = req.params
    const contenidoUpdated = await Contenido.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!contenidoUpdated) {
      return res.status(404).json({ message: 'Contenido no encontrado' })
    }
    return res.status(200).json(contenidoUpdated)
  } catch (error) {
    return res.status(400).json('Error al hacer update de los contenidos')
  }
}

const deleteContenido = async (req, res, next) => {
  try {
    const { id } = req.params
    const contenidos = await Contenido.findByIdAndDelete(id)
    return res.status(200).json(contenidos)
  } catch (error) {
    return res.status(400).json('Error al hacer delete de los contenidos')
  }
}

module.exports = {
  getContenido,
  postContenido,
  updateContenido,
  deleteContenido
}
