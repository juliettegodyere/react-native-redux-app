import { Endpoints } from '../../../config/endpoints';
import { AsyncFlowStatus, HttpUtils, LogUtils } from '../../../utils';

const Types = {
    ACCEPT_LEGAL_AGREEMENTS: "ACCEPT_LEGAL_AGREEMENTS",

    SET_INTRO_WALKTHROUGH_INDEX: "SET_INTRO_WALKTHROUGH_INDEX",

    SEND_INVITE_USER_REQUEST: "SEND_INVITE_USER_REQUEST",
    RECEIVE_INVITE_USER_RESPONSE: "RECEIVE_INVITE_USER_RESPONSE",

    SEND_ACTIVATE_USER_REQUEST: "SEND_ACTIVATE_USER_REQUEST",
    RECEIVE_ACTIVATE_USER_RESPONSE: "RECEIVE_ACTIVATE_USER_RESPONSE"
}

const Actions = {
    // Legal Agreements
    acceptLegalAgreements: () => {
        return { type: Types.ACCEPT_LEGAL_AGREEMENTS, data: { legal_acceptance_date: Date.now() } }
    },

    // Walkthrough
    setIntroWalkthroughIndex: (index) => {
        return { type: Types.SET_INTRO_WALKTHROUGH_INDEX, data: { walktrough_index: index } }
    },

    // Invitation
    sendInviteUserRequest: (channel) => {
        return { type: Types.SEND_INVITE_USER_REQUEST, data: { channel, status: AsyncFlowStatus.PENDING } }
    },
    receiveInviteUserResponse: (data) => {
        return { type: Types.RECEIVE_INVITE_USER_RESPONSE, data }
    },

    // Activation
    sendActivateUserRequest: () => {
        return { type: Types.SEND_ACTIVATE_USER_REQUEST, data: { status: AsyncFlowStatus.PENDING } }
    },
    receiveActivateUserResponse: (data) => {
        return { type: Types.RECEIVE_ACTIVATE_USER_RESPONSE, data: { credentials: data.body } }
    }
}

const InvitationFlowStatus = Object.assign({}, AsyncFlowStatus, {
    FORBIDDEN: "forbidden"
})
const ActivationFlowStatus = Object.assign({}, AsyncFlowStatus, {
    REJECTED: "rejected"
})

//
// LEGAL AGREEMENT ACTIONS
//
function acceptLegalAgreements() {
    return Actions.acceptLegalAgreements();
}

//
// WALKTHROUGH ACTIONS
//
function setIntroWalkthroughIndex(index) {
    return Actions.setIntroWalkthroughIndex(index);
}

//
// INVITATION ACTIONS
//
function inviteUser(channel, params) {
    return async (dispatch, getState) => {
        dispatch(Actions.sendInviteUserRequest(channel));

        let options = {
            method: 'POST',
            body: HttpUtils.buildFormUrlEncodedBody(params)
        };
        try {
            let response = await fetch(Endpoints.auth.invite, options);
            HttpUtils.handleAndDispatchResponse(dispatch, response, Actions.receiveInviteUserResponse);
        } catch (error) {
            LogUtils.error(error);
        }
    }
}

//
// ACTIVATION ACTIONS
//
function activateUser(params) {
    return async (dispatch) => {
        dispatch(Actions.sendActivateUserRequest());

        let options = {
            method: 'POST',
            body: HttpUtils.buildFormUrlEncodedBody(params)
        };
        try {
            let response = await fetch(Endpoints.auth.activate, options);
            HttpUtils.handleAndDispatchResponse(dispatch, response, Actions.receiveActivateUserResponse);
        } catch (error) {
            LogUtils.error(error);
        }
    }
}

export const AuthPinActions = {
    Types,
    InvitationFlowStatus,
    ActivationFlowStatus,
    acceptLegalAgreements,
    setIntroWalkthroughIndex,
    inviteUser,
    activateUser
}
/*
1. Invite a user by phone number or email
2. Server processes the request by
    a. Adding an invitation object into the db
    b. Generating a 6-digit activation code
    c. Sending the activation code and the activation URL  to the invitee
3. User goes to URL and enters activation code
4. User chooses a login option i.e. direct, oauth, or phone
    a. Direct
        i. If the user exists, they are prompted to type in their password
        ii. Otherwise, the system creates a new account
    b. OAuth - the system creates or updates the social profile upon successful auth
    c. Phone - the system creates or updates the social profile
5. The system returns a bearer token or session ID
*/