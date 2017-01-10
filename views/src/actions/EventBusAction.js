import { createAction } from 'redux-actions';
import * as ActionTypes from 'constants/EventBusType';

const HeaderBtnActions = {
	register: createAction(ActionTypes.RESGISTER_EVENT, (type, fn, data) => {
		return {
			type,
			fn,
			data
		}
	}),
	execute: createAction(ActionTypes.EXECUTE, (type, msg, status) => {
		return {
			type,
			msg, 
			status
		}
	})
};

export default HeaderBtnActions;