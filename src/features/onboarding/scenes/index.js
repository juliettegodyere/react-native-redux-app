import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import WelcomeView from '../containers/welcome';
import WalkthroughView from '../containers/walkthrough';
import InvitationView from '../containers/invitation';
import ActivationView from '../containers/activation';

import * as translations from '../config/locale';

const OnboardingScene = {

    reducer,
    i18n: { translations },
    render: () => {
        return <Scene key="onboarding">
            <Scene key="welcome" component={WelcomeView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="walkthrough" component={WalkthroughView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="invitation" component={InvitationView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="activation" component={ActivationView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default OnboardingScene;