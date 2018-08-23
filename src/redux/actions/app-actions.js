import { Endpoints } from '../../config/endpoints';
import { AsyncFlowStatus, LogUtils } from '../../utils';

const Types = {
    SEND_CONFIGURE_APP_REQUEST: "SEND_CONFIGURE_APP_REQUEST",
    RECEIVE_CONFIGURE_APP_RESPONSE: "RECEIVE_CONFIGURE_APP_RESPONSE"
}

const Actions = {
    // App Configuration
    sendConfigureAppRequest: () => {
        return { type: Types.SEND_CONFIGURE_APP_REQUEST, data: { status: AsyncFlowStatus.PENDING } }
    },
    receiveConfigureAppResponse: (data) => {
        return { type: Types.RECEIVE_CONFIGURE_APP_RESPONSE, data: { config: data.body } }
    }
}

//
// APP CONFIGURATION ACTIONS
//
function configureApp() {
    return async (dispatch) => {
        dispatch(Actions.sendConfigureAppRequest());
        try {
            let response = await fetch(Endpoints.configuration.mobility);
            HttpUtils.handleAndDispatchResponse(dispatch, response, Actions.receiveConfigureAppResponse);
        } catch (error) {
            LogUtils.error(error);
        }
    }
}

export const AppActions = {
    Types,
    configureApp
}