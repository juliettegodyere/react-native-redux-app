import { TopupActions } from './actions';

const initialState = {}

const topupReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case TopupActions.Types.ACCEPT_LEGAL_AGREEMENTS:
        case TopupActions.Types.SET_INTRO_WALKTHROUGH_INDEX:
        case TopupActions.Types.SEND_INVITE_USER_REQUEST:
        case TopupActions.Types.RECEIVE_INVITE_USER_RESPONSE:
        case TopupActions.Types.SEND_ACTIVATE_USER_REQUEST:
        case TopupActions.Types.RECEIVE_ACTIVATE_USER_RESPONSE:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}

const topupReducerConfig = {
    Topup: topupReducer
};
export default topupReducerConfig;