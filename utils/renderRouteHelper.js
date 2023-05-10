import { Route } from 'react-router-dom';

export default function renderRoute(routesMap) {
	// if (!route.children) {
	// 	return <Route {...route} />;
	// } else {
	// 	const { children, ...rest } = route;
	// 	return (
	// 		<Route {...rest}>
	// 			{children.map((item) => {
	// 				return renderRoute(item);
	// 			})}
	// 		</Route>
	// 	);
	// }
	return routesMap.map((routeItem) => {
		const { children = [], ...rest } = routeItem;
		if (!children.length) {
			return <Route {...rest} />;
		} else {
			return <Route {...rest}>{renderRoute(children)}</Route>;
		}
	});
}
