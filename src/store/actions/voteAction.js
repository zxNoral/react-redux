/*
 * 每个模块的ACTION：把需要DISPATCH派发的对象用各个方法包起来，返回的结果就是需要派发的对象 
 */
import * as TYPES from '../action-types';
const voteAction = {
	support(payload) {
		return {
			type: TYPES.VOTE_SUPPORT,
			payload:1
		};
	},
	oppose(payload) {
		return {
			type: TYPES.VOTE_OPPOSE,
			num: 1
		};
	}
};
export default voteAction;