import thunk from 'redux-thunk';
import _ from 'lodash';

import AppScene from '../scenes';
import OnboardingScene from '../features/onboarding/scenes';
import CreditScene from '../features/credits/scenes';
import TopupScene from '../features/topup/scenes/index';


const Config = {
    redux: {
        state_key: '@Micropay:state',
        middlewares: [thunk],
        reducers: {
            ...AppScene.reducer,
            ...OnboardingScene.reducer,
            ...CreditScene.reducer
        }
    },
    i18n: {
        translations: _.merge({},
            AppScene.i18n.translations,
            OnboardingScene.i18n.translations,
            CreditScene.i18n.translations
        )
    },
    scenes: [
        [TopupScene, CreditScene],//, TopupScene, TransactionListScene, SettingsScene]
        OnboardingScene,
        AppScene,
    ]
}
export default Config;