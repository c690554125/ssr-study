import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import routesMap from './routes';
import { getClientStore } from './store';

const App = () => {
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter>
				<Routes>
					{routesMap.map((route) => {
						return <Route {...route} />;
					})}
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

const root = document.getElementById('root');
hydrateRoot(root, <App />);
