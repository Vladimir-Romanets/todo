import Koa from 'koa';
import logger from 'koa-logger';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import routesConfig from './controllers';

const app = new Koa();
const port = 3000;

app.use(logger())
    .use(cors())
    .use(bodyParser())
    .use(routesConfig());

app.listen( port, () => console.log(`Server run on port ${port}`) );