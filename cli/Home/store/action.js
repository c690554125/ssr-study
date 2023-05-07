import { delay } from '@/utils/index';
import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
	type: CHANGE_LIST,
	payload: list
});

export const getHomeList = () => {
	return (dispatch) => {
		return delay(500).then(() => {
			dispatch(changeList([ 'a', 'b', 'c' ]));
		});
	};
};
