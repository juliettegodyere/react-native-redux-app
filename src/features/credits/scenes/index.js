import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import CreditListView from '../containers/credit-list';
import CreditDetailView from '../containers/credit-detail';

import * as translations from '../config/locale';

const CreditScene = {

    reducer,
    i18n: { translations },
    render: () => {
        return <Scene key="credits" title="Credits">
            <Scene key="credit-detail" component={CreditDetailView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="credit-list" component={CreditListView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default CreditScene;