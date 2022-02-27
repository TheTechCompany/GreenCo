import { Router } from 'express'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { request, gql } from 'graphql-request'
import passport from 'passport'

export default () => {
    const router = Router()

    router.post('/login', async (req, res) => {

        const email = req.body.email;
        const pwd = crypto.createHash('sha256').update(req.body.password).digest('hex');


        const query = gql`
            query GetAccount($email: String!, $password: Hash!) {

                customerAccounts(where: {email: $email, password: $password}){
                    id
                    name

                    customer {
                        id
                    }
                }

            }
        `

        const result = await request(`${process.env.API_SERVER || ''}?appliance=GreenScreen`, query, {email, password: req.body.password}, {
            Authorization: `bearer ${process.env.API_KEY}`
        })

        const { customerAccounts } = result;

        console.log({account: customerAccounts?.[0]})
        const token = jwt.sign(
            {
                id: customerAccounts[0].id,
                account: customerAccounts[0]?.customer?.id,
            },
            process.env.JWT_SECRET || 'test'
        );

        res.send({token})
        // console.log({result})
    })

    router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
        res.send({user: req.user})
    })

    return router;
}