import { OnboardingActions } from './actions';

const initialState = {}

const onboardingReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case OnboardingActions.Types.ACCEPT_LEGAL_AGREEMENTS:
        case OnboardingActions.Types.SET_INTRO_WALKTHROUGH_INDEX:
        case OnboardingActions.Types.SEND_INVITE_USER_REQUEST:
        case OnboardingActions.Types.RECEIVE_INVITE_USER_RESPONSE:
        case OnboardingActions.Types.SEND_ACTIVATE_USER_REQUEST:
        case OnboardingActions.Types.RECEIVE_ACTIVATE_USER_RESPONSE:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}

const onboardingReducerConfig = {
    onboarding: onboardingReducer
};
export default onboardingReducerConfig;