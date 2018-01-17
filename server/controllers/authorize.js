import Router from 'koa-router';
import authorization from '../services/auth';

async function auth (ctx) {
    const data = ctx.request.body;
    try {
        ctx.body = await authorization(data);
    } catch(e) {
        console.log(e);
    }
};

const logout = ctx => {
    const { login } = ctx.request.body;
    ctx.body = {
        message: `Пользователь ${login} успешно разлогинился`
    };
};

export default function authorize() {
    const router = new Router();
    router.post('/auth', auth);
    //router.post('/logout', logout);
    return router.routes();
};