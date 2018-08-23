import { CreditActions } from './actions';

const initialState = {}

const creditReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case CreditActions.Types.ACCEPT_LEGAL_AGREEMENTS:
        case CreditActions.Types.SET_INTRO_WALKTHROUGH_INDEX:
        case CreditActions.Types.SEND_INVITE_USER_REQUEST:
        case CreditActions.Types.RECEIVE_INVITE_USER_RESPONSE:
        case CreditActions.Types.SEND_ACTIVATE_USER_REQUEST:
        case CreditActions.Types.RECEIVE_ACTIVATE_USER_RESPONSE:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}

const creditReducerConfig = {
    Credit: creditReducer
};
export default creditReducerConfig;