import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderRoute from '@/utils/renderRouteHelper';

/**
 * 
 * @param {import('koa').Context} ctx 
 * @returns 
 */
export const render = (ctx, store, routes) => {
	const routesTree = renderRoute(routes);
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={ctx.request.path}>
				<Routes>{routesTree[0]}</Routes>
			</StaticRouter>
		</Provider>
	);

	return `
    <html>
      <head>
        <title>ssr</title>
				<script>
					window.context = {
						state: ${JSON.stringify(store.getState())}
					}
				</script>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/build/bundle.client.js"></script>
      </body>
    </html>
  `;
};
