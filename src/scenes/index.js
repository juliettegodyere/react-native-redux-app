import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';

import reducer from '../redux/reducer';
import SplashView from '../components/splash';
import AboutView from '../components/about';

import * as translations from '../config/locale';

const AppScene = {

    reducer,
    i18n: { translations },
    render: (state) => {
        return <Scene key="app">
            <Scene key="about"
                component={AboutView}
                description={'Micropay - pay less, pay fast'}
                copypright={'@Copyright 2018 Micropay Inc.'}
                logo_url={require('../assets/img/logo.png')}
                hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }

}

export default AppScene;