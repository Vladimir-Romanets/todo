import Router from 'koa-router';
import { authorization, getAllTasks, chgTaskStatus, saveTaskData } from '../model';
import { verifyJWT } from '../validators';

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

async function getTasklist (ctx) {
    const data = ctx.request;
    try {
        verifyJWT(data.header);
        ctx.body = await getAllTasks(data.body);
    } catch(e) {
        console.log(e);
        ctx.throw(e.status, e.message);
    }
};

async function saveTask (ctx) {
    const data = ctx.request.body;
    try {
        ctx.body = await saveTaskData(data);
    } catch(e) {
        console.log(e);
    }
};

const changeTaskStatus = async ctx => {
    const data = ctx.request.body;
    try {
        ctx.body = await chgTaskStatus(data);
    } catch(e) {
        console.log(e);
    }
};

export default function rotesRules() {
    const router = new Router();
    router.post('/auth', auth);
    router.post('/logout', logout);
    router.post('/tasks', getTasklist);
    router.post('/savetaskdata', saveTask);
    router.post('/changestatus', changeTaskStatus);
    return router.routes();
};