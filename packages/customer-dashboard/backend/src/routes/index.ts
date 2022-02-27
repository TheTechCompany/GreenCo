import { Router } from 'express'
import auth from './auth'

export default () => {
    const router = Router()

    router.use(auth())

    return router;
}