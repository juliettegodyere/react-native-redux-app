import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import UserListView from '../containers/users-view';

const UserScene = {

    reducer,
    render: () => {
        return <Scene key="users">
            <Scene key="userList" component={UserListView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default UserScene;
