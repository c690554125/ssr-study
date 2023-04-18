import Koa from 'koa';
import { renderToString } from 'react-dom/server';
import Home from './home.jsx';

const app = new Koa();

const content = renderToString(<Home />);

app.use(async (ctx, next) => {
	ctx.response.set('Content-Type', 'text/html');
	// 设置响应体
	ctx.response.body = `
  <html>
    <head>
      <title>ssr</title>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
  `;
	// 调用下一个中间件
	await next();
});

app.listen(1234, () => {
	console.log('Koa app listening on port 3000');
});
