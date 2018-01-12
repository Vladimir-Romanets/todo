import Router from 'koa-router';
import authorize from './authorize';
import dashboard from './dashboard';

export default function routesConfig() {
    const totalRouter = new Router();
    totalRouter.use(
        authorize(),
        dashboard()
    );
    return totalRouter.routes();
};