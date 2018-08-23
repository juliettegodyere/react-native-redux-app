import { ActivityActions } from './actions';

const initialState = {}

const activityReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case ActivityActions.Types.ACCEPT_LEGAL_AGREEMENTS:
        case ActivityActions.Types.SET_INTRO_WALKTHROUGH_INDEX:
        case ActivityActions.Types.SEND_INVITE_USER_REQUEST:
        case ActivityActions.Types.RECEIVE_INVITE_USER_RESPONSE:
        case ActivityActions.Types.SEND_ACTIVATE_USER_REQUEST:
        case ActivityActions.Types.RECEIVE_ACTIVATE_USER_RESPONSE:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}

const activityReducerConfig = {
    Activity: activityReducer
};
export default activityReducerConfig;