import { config } from 'dotenv';
config();
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import { schema } from './schema'
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes'

import passport from 'passport';

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const jwtConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'test',
}

const app = express()

app.use(cors())
app.use(bodyParser.json());

app.use(passport.initialize());
// app.use(passport.session());

passport.serializeUser((user, next) => {
    next(null, user)
});

passport.deserializeUser((obj: any, next) => {
    next(null, obj);
})

passport.use(new JwtStrategy(jwtConfig, (jwtPayload: any, done: (err: any, user: any) => void) => {
    done(null, jwtPayload);
}))

app.use(routes())

app.use('/graphql', passport.authenticate('jwt', {session: false}), graphqlHTTP({
    graphiql: true,
    schema: schema 
}))

app.listen(8080, () => {
    console.log(`Backend up on 8080`)
})