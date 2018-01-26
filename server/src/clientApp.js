import path from 'path';

import Koa from 'koa';
import cors from 'koa-cors';
import convert from 'koa-convert';
import serve from 'koa-static';

const app = new Koa();

app
	.use(convert(cors()))
	.use(serve(path.join(__dirname, '..', '..', 'dist', 'client')));

export default app;
