import Router from 'koa-router';
import { tasks } from '../services/tasks';
import { status } from '../services/task_status';
import { savetaskdata } from '../services/save_task_data';

async function getTasks (ctx) {
    const data = ctx.request;
    try {
        ctx.body = await tasks(data.body);
    } catch(e) {
        console.log(e);
    }
};

async function saveTask (ctx) {
    const data = ctx.request.body;
    try {
        ctx.body = await savetaskdata(data);
    } catch(e) {
        console.log(e);
    }
};

const changeStatus = async ctx => {
    const data = ctx.request.body;
    try {
        ctx.body = await status(data);
    } catch(e) {
        console.log(e);
    }
};

export default function dashboard() {
    const router = new Router();
    router.post('/tasks', getTasks);
    router.post('/savetaskdata', saveTask);
    router.post('/changestatus', changeStatus);
    return router.routes();
};