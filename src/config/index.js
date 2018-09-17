import thunk from 'redux-thunk';
import _ from 'lodash';

import AppScene from '../scenes';
import OnboardingScene from '../features/onboarding/scenes';
import CreditScene from '../features/credits/scenes';
import TopupScene from '../features/topup/scenes/index';
import ActivityScene from '../features/activity/scenes/index';
import SettingsScene from '../features/settings/scenes/index';
import AuthPinScene from '../features/auth-pin/scenes/index';


const Config = {
    redux: {
        state_key: '@Micropay:state',
        middlewares: [thunk],
        reducers: {
            ...AppScene.reducer,
            ...OnboardingScene.reducer,
            ...CreditScene.reducer,
            ...ActivityScene.reducer,
            ...SettingsScene.reducer,
            ...AuthPinScene.reducer
        }
    },
    i18n: {
        translations: _.merge({},
            AppScene.i18n.translations,
            OnboardingScene.i18n.translations,
            CreditScene.i18n.translations,
            ActivityScene.i18n.translations,
            SettingsScene.i18n.translations,
            AuthPinScene.i18n.translations
        )
    },
    scenes: [
        AuthPinScene,
        [CreditScene, TopupScene, ActivityScene, SettingsScene],
        OnboardingScene,
        AppScene,
    ]
}
export default Config;