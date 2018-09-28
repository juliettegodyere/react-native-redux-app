import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import DiscoverView from '../containers/discover-view';

const DiscoverScene = {

    reducer,
    render: () => {
        return <Scene key="discoverScene">
            <Scene key="discoverItem" component={DiscoverView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default DiscoverScene;
