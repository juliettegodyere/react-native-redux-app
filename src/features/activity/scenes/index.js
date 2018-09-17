import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import TransactionListView from '../containers/transaction-list';

import * as translations from '../config/locale';

const ActivityScene = {

    reducer,
    i18n: { translations },
    render: () => {
        return <Scene key="activity" title="Activity">
            <Scene key="transaction-list" component={TransactionListView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default ActivityScene;