import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import EventsView from '../containers/events-view';

const EventsScene = {

    reducer,
    render: () => {
        return <Scene key="eventsScene">
            <Scene key="eventItem" component={EventsView} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default EventsScene;
