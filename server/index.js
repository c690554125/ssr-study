import Koa from 'koa';
import KoaStatic from 'koa-static';
import KoaRouter from '@koa/router';
import routesMap from '@/cli/routes';
import { getStore } from '@/cli/store';
import handleDataFetch from './handleDataFetch';
import { render } from './utils';

const app = new Koa();

const router = new KoaRouter();
router.get(/.*/, async (ctx) => {
	const store = getStore();
	await handleDataFetch(routesMap, ctx.request, store);
	const html = render(ctx, store, routesMap);
	ctx.body = html;
});

app.use(KoaStatic('.'));
app.use(router.routes()).use(router.allowedMethods());

app.listen(1234, () => {
	console.log('Koa app listening on port 1234');
});
