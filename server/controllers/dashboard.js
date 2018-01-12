import Router from 'koa-router';
import { getAllTasks, chgTaskStatus, saveTaskData } from '../model';

async function getTasklist (ctx) {
    const data = ctx.request;
    try {
        ctx.body = await getAllTasks(data.body);
    } catch(e) {
        console.log(e);
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

export default function dashboard() {
    const router = new Router();
    router.post('/tasks', getTasklist);
    router.post('/savetaskdata', saveTask);
    router.post('/changestatus', changeTaskStatus);
    return router.routes();
};