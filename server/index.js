import Koa from 'koa';
import logger from 'koa-logger';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import routesConfig from './controllers';
import { verifyJWT } from './validators';

const app = new Koa();
const port = 3000;

app.use( logger() )
    .use( cors() )
    .use( bodyParser() )
    .use( async (ctx, next) => {
        try{
            verifyJWT(ctx.request.url, ctx.request.header);
            await next();
        } catch(e){
            ctx.throw(401, 'Uknown user');
        }
    }) 
    .use( routesConfig() );

app.listen( port, () => console.log(`Server run on port ${port}`) );