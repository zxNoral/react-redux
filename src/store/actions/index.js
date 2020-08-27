/*
 * 合并每个模块下的ACTION 
 */
import voteAction from './voteAction';
import userAction from './userAction';

const action = {
	vote: voteAction,
	user: userAction
};
export default action;