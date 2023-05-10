import { Route } from 'react-router-dom';

export default function renderRoute(routesMap) {
	return routesMap.map((routeItem) => {
		const { children = [], ...rest } = routeItem;
		if (!children.length) {
			return <Route {...rest} />;
		} else {
			return <Route {...rest}>{renderRoute(children)}</Route>;
		}
	});
}
