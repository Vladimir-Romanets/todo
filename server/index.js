import Koa from 'koa';
import logger from 'koa-logger';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { getDefaultSettings } from 'http2';

const app = new Koa();
const router = new Router();
const port = 3000;

app.use(logger())
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

    router.post('/auth', auth );
    router.post('/logout', logout);
    router.post('/gettasklist', getTasklist);
    router.post('/savetaskdata', saveTask);
    router.post('/changestatus', changeTaskStatus);

    async function auth (ctx, next){
        const { login } = ctx.request.body;
        await next();
        ctx.body = {
            auth: true,
            login,
            token: '31cc1f0ca737a62b1f9c35154a1cdb7a'
        };
    };

    async function logout (ctx, next) {
        const { login } = ctx.request.body;
        await next();
        ctx.body = {
            message: `Пользователь ${login} успешно разлогинился`
        };
    };

    async function getTasklist(ctx, next) {
        const { login } = ctx.request.body;
        await next();
        ctx.body = {
            newtasks: [
                {
                    id: 123,
                    title: 'Cоздание формы авторизации',
                    description: 'Форма авторизации должна иметь поля: логин, пароль, кнопка сабмит'
                },
                {
                    id: 124,
                    title: 'Cоздание карточки Задачи',
                    description: 'Карточка должна иметь поля: название, описание задачи.....'
                }
            ],
            inprogress: [],
            completed: [
                {
                    id: 1,
                    title: 'Tест',
                    description: 'Тест.....'
                }
            ]
        }
    };

    async function saveTask(ctx, next) {
        const data = ctx.request.body;
        await next();
        data.id = Number(data.id) ? data.id : Date.now();
        data.saveStatus = true;
        ctx.body = data;
    };

    async function changeTaskStatus(ctx, next) {
        const data = ctx.request.body;
        await next();
        ctx.body = {
            status: true,
            data
        }
    }

app.listen( port, () => console.log(`Server run on port ${port}`) );