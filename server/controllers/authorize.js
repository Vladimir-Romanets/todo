import Router from 'koa-router';
import passport from 'koa-passport';

const auth = async (ctx) =>
    passport.authenticate('local', async function (err, user) {
        if (err) ctx.body = err;
        if (user) ctx.body = user;
    }
)(ctx);


// const logout = ctx => {
//     const { login } = ctx.request.body;
//     ctx.body = {
//         message: `Пользователь ${login} успешно разлогинился`
//     };
// };

export default function authorize() {
    const router = new Router();
    router.post('/auth', auth);
    //router.post('/logout', logout);
    return router.routes();
};