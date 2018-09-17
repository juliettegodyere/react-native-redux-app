import { SettingsActions } from './actions';

const initialState = {}

const SettingsReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case SettingsActions.Types.ACCEPT_LEGAL_AGREEMENTS:
        case SettingsActions.Types.SET_INTRO_WALKTHROUGH_INDEX:
        case SettingsActions.Types.SEND_INVITE_USER_REQUEST:
        case SettingsActions.Types.RECEIVE_INVITE_USER_RESPONSE:
        case SettingsActions.Types.SEND_ACTIVATE_USER_REQUEST:
        case SettingsActions.Types.RECEIVE_ACTIVATE_USER_RESPONSE:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}

const SettingsReducerConfig = {
    Settings: SettingsReducer
};
export default SettingsReducerConfig;