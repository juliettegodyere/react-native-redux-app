import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import SortMainView from '../containers/sort';

const SortMainScene = {

    reducer,
    render: () => {
        return <Scene key="sort">
            <Scene key="sortContent" component={SortMainView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default SortMainScene;
