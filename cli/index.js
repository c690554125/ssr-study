import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import routesMap from './routes';
import { getClientStore } from './store';
import renderRoute from '@/utils/renderRouteHelper';

const App = () => {
	const routesTree = renderRoute(routesMap);
	console.log('routesTree', routesTree);
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter>
				<Routes>{routesTree.map((RouteItem) => RouteItem)}</Routes>
			</BrowserRouter>
		</Provider>
	);
};

const root = document.getElementById('root');
hydrateRoot(root, <App />);
