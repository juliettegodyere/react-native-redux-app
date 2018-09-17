import { AuthPinActions } from './actions';

const initialState = {}

const authPinReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case AuthPinActions.Types.ACCEPT_LEGAL_AGREEMENTS:
        case AuthPinActions.Types.SET_INTRO_WALKTHROUGH_INDEX:
        case AuthPinActions.Types.SEND_INVITE_USER_REQUEST:
        case AuthPinActions.Types.RECEIVE_INVITE_USER_RESPONSE:
        case AuthPinActions.Types.SEND_ACTIVATE_USER_REQUEST:
        case AuthPinActions.Types.RECEIVE_ACTIVATE_USER_RESPONSE:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}

const authPinReducerConfig = {
    authPin: authPinReducer
};
export default authPinReducerConfig;