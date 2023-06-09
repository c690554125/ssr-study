import Home from './Home';
import Layout from './Layout';
import Login from './login';

// export default (
// 	<Routes>
// 		<Route path="/" exact element={<Home />} />
// 		<Route path="/login" exact element={<Login />} />
// 	</Routes>
// );

const routesMap = [
	{
		path: '/',
		element: <Layout />,
		key: 'layout',
		children: [
			{
				path: 'home',
				element: <Home />,
				exact: true,
				loadData: Home.loadData, //服务端获取异步数据的函数
				key: 'home'
			},
			{
				path: 'login',
				element: <Login />,
				exact: true,
				key: 'login'
			}
		]
	}
];

export default routesMap;
