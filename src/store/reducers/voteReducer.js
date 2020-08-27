import * as TYPES from '../action-types';
const initialState = {
	supNum: 0,
	oppNum: 0
};
export default function voteReducer(state = initialState, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case TYPES.VOTE_SUPPORT:
			state.supNum += action.payload;
			break;
		case TYPES.VOTE_OPPOSE:
			state.oppNum += action.num;
			break;
	}
	return state;
};