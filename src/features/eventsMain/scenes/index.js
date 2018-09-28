import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import EventsMainView from '../containers/events-main';
import EventsMainDetails from '../containers/events-main-details';

const EventsMainScene = {

    reducer,
    render: () => {
        return <Scene key="EventsMain">
            <Scene key="eventsMainItem" component={EventsMainView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="eventsMainDetails" component={EventsMainDetails} hideNavBar={true} title="" panHandlers={null} />
        </Scene>
    }
}
export default EventsMainScene;
