import { matchRoutes } from 'react-router-dom';

export default async function(routes, req, store) {
	try {
		const matchedRoutes = matchRoutes(routes, req.path);
		const promises = [];
		matchedRoutes.forEach((item) => {
			if (item.route.loadData) {
				promises.push(item.route.loadData(store));
			}
		});
		await Promise.all(promises);
	} catch (error) {
		console.log(error);
	}
}
