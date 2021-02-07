import { Router } from 'express'

import { obtenerGrados } from '../controllers/grado.controller'

const router = Router()

router.get('', obtenerGrados)

export default router