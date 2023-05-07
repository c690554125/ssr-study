import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

/**
 * 
 * @param {import('koa').Context} ctx 
 * @returns 
 */
export const render = (ctx, store, routes) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={ctx.request.path}>
				<Routes>
					{routes.map((route) => {
						return <Route {...route} />;
					})}
				</Routes>
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
