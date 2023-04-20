import Koa from 'koa';
import { renderToString } from 'react-dom/server';
import Home from '../cli/home.jsx';

const app = new Koa();

const content = renderToString(<Home />);

app.use(async (ctx) => {
	ctx.response.set('Content-Type', 'text/html');
	// 设置响应体
	ctx.body = `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;
});

app.listen(1234, () => {
	console.log('Koa app listening on port 3000');
});
