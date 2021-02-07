import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
import path from 'path'

import gradosRoutes from './routes/grados.routes'
import personaRoutes from './routes/personas.routes'


const app = express()

const storage = multer.diskStorage({
    destination: path.join(path.dirname(__dirname), "frontend", "src", "assets", "estudiantes"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

// variables

app.set('port', process.env.PORT || 3000)

// middlewares
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(multer({storage}).single('foto'))

app.use(morgan('dev'))

// routes
app.use('/api/grado', gradosRoutes)
app.use('/api/persona', personaRoutes)


export default app