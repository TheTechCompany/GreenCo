import { Router } from 'express'
import auth from './auth'
import preview from './preview'

export default () => {
    const router = Router()

    router.use(auth())
    router.use('/preview', preview())

    return router;
}