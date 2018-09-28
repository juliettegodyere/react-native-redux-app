import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import onBoardingScreenView from '../containers/swiper-message';

const OnBoardingScene = {

    reducer,
    render: () => {
        return <Scene key="onBoarding">
            <Scene key="swiper_message" component={onBoardingScreenView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default OnBoardingScene;
