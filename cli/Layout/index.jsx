import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div>
			this is Header
			<Link to="/home">Home</Link>
			<Link to="/login">Login</Link>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
