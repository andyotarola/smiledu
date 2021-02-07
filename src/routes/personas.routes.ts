import { Router } from 'express'

import { agregarPersona, obtenerPersonas, quitarPersona} from '../controllers/persona.controller'

const router = Router()

router.get('', obtenerPersonas)
router.post('', agregarPersona)

router.delete('/:_id', quitarPersona)

export default router