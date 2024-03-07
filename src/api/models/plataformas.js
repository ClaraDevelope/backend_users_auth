const mongoose = require('mongoose')

const plataformasSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    calification: { type: Number },
    image: { type: String, required: true }
  },
  {
    collection: 'plataformas',
    timestamps: true
  }
)

const Plataforma = mongoose.model(
  'plataformas',
  plataformasSchema,
  'plataformas'
)
module.exports = Plataforma
