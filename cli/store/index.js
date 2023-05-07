import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '@/cli/Home/store/index';
//合并项目组件中store的reducer
const reducer = combineReducers({
	home: homeReducer
});
//创建store，并引入中间件thunk进行异步操作的管理
export const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk));
};

// 创建客户端侧的store
export const getClientStore = () => {
	const defaultState = window.context ? window.context.state : {};
	return createStore(reducer, defaultState, applyMiddleware(thunk));
};
