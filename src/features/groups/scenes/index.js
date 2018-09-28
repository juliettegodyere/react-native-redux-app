import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import GroupsView from '../containers/groups-view';
import CreateGroup from '../containers/create-group';
import NewGroup from '../containers/new-group';

const GroupsScene = {

    reducer,
    render: () => {
        return <Scene key="groups">
            {/* <Scene key="groupItems" component={GroupsView} hideNavBar={true} title="" panHandlers={null} /> */}
            {/* <Scene key="createGroup" component={CreateGroup} hideNavBar={true} title="" panHandlers={null} /> */}
            <Scene key="newGroup" component={NewGroup} hideNavBar={true} title="" panHandlers={null} />

        </Scene>
    }
}
export default GroupsScene;
