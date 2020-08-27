import * as TYPES from '../action-types';
const initialState = {
	title: 'USER版块'
};
export default function userReducer(state = initialState, action) {
	state = JSON.parse(JSON.stringify(state));
	switch (action.type) {

	}
	return state;
};