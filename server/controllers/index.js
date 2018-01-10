import Router from 'koa-router';
import rotesRules from './rules';

export default function routesConfig() {
    const totalRouter = new Router();
    totalRouter.use( rotesRules() );
    return totalRouter.routes();
};