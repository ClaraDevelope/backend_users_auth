require('dotenv').config()
const express = require('express')
const { connectBD } = require('./src/config/db')
const { usersRouter } = require('./src/api/routes/users')
const { plataformasRouter } = require('./src/api/routes/plataformas')
const { contenidoRouter } = require('./src/api/routes/contenido')

const app = express()
app.use(express.json())
const PORT = 3535
connectBD()

app.use('/api/v1/users', usersRouter)
app.use('/api/v1/plataformas', plataformasRouter)
app.use('/api/v1/contenido', contenidoRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Ruta no encontrada')
})

app.listen(PORT, () => {
  console.log('escuchamos el puerto en http://localhost' + PORT)
})
