const mongoose = require('mongoose')

const contenidoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['serie', 'pelicula', 'documental'],
      required: true
    },
    plataformas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'plataformas',
        required: true
      }
    ],
    calification: { type: Number },
    image: { type: String, required: true }
  },
  {
    collection: 'contenido',
    timestamps: true
  }
)

const Contenido = mongoose.model('contenido', contenidoSchema, 'contenido')
module.exports = Contenido
