import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import CategoryListView from '../containers/category-list';
import VoucherListView from '../containers/voucher-list';
import CheckoutView from '../containers/checkout';

import * as translations from '../config/locale';

const TopupScene = {

    reducer,
    i18n: { translations },
    render: () => {
        return <Scene key="topup" title="Topup">
            <Scene key="voucher-list" component={VoucherListView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="category-list" component={CategoryListView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="checkout" component={CheckoutView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default TopupScene;