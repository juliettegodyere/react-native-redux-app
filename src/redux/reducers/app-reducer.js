import { AppActions } from '../actions/app-actions';

const initialState = {}

const appReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case AppActions.Types.WARN:
        case AppActions.Types.ERROR:
        case AppActions.Types.SEND_CONFIGURE_APP_REQUEST:
        case AppActions.Types.RECEIVE_CONFIGURE_APP_RESPONSE:
            newState = { ...state, ...action.data }
            break;
    }
    return newState;
}

export default appReducer;