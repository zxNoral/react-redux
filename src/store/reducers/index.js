import {combineReducers} from 'redux';
import voteReducer from './voteReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
	vote: voteReducer,
	user: userReducer
});
export default reducer;