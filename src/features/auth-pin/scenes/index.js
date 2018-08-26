import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import PinView from '../containers/pin';

import * as translations from '../config/locale';

const OnboardingScene = {

    reducer,
    i18n: { translations },
    render: () => {
        return <Scene key="auth">
            <Scene key="pin" component={PinView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default OnboardingScene;