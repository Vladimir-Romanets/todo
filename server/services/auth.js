import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import models from '../models';
import { sign } from 'jsonwebtoken';
import { SECRET } from '../config';

const Users = models.Users;

// passport.serializeUser((user, done) => {
//     console.log('----------serializeUser--------------')
//     done(null, user.id)
// });

// passport.deserializeUser(async (id, done) => {
//     console.log('----------deserializeUser--------------')
//     done(null, user);
// });


passport.use(
    new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password'
    },
        async (username, password, done) => {
            try {
                const { dataValues } = await Users.findOne({ where: { login: username } });
                if (dataValues.password !== password)
                    throw new Error('Password incorrect');
                done(null, {
                    auth: true,
                    login: username,
                    id: dataValues.id,
                    token: sign(username, SECRET)
                });
            } catch (err) {
                done(null, { auth: false }, { message: err.message || 'Login or password incorrect.' });
            }
        })
);

export default passport;