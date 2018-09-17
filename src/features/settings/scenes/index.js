import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import SettingsListView from '../containers/settings-list';

import * as translations from '../config/locale';

const SettingsScene = {

    reducer,
    i18n: { translations },
    render: () => {
        return <Scene key="settings" title="Settings">
            <Scene key="settings-list" component={SettingsListView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default SettingsScene;