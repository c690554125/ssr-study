import { connect } from 'react-redux';
import { getHomeList } from '@/cli/Home/store/action';
import { useEffect } from 'react';

const Home = (props) => {
	const { list = [], getHomeList } = props;

	useEffect(() => {
		console.log('是否需要发起客户端请求', !list.length);
		if (!list.length) {
			getHomeList();
		}
	}, []);

	return (
		<div
			onClick={() => {
				console.log('home print');
			}}
		>
			this is home page
			<ul>
				{list.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

Home.loadData = (store) => {
	return store.dispatch(getHomeList());
};

const mapStateToProps = (state) => ({
	list: state.home.list
});

const mapDispatchToProps = (dispatch) => ({
	getHomeList() {
		dispatch(getHomeList());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
