import React from 'react';
import { Scene } from 'react-native-router-flux';

import reducer from '../redux/reducer';

import TimelineListView from '../containers/timeline-list';
import TimelineDetailView from '../containers/timeline-detail';
import AddFeeds from '../containers/add-feeds';

import * as translations from '../config/locale';

const TimelineScene = {
    reducer,
    //i18n: { translations },
    render: () => {
        return <Scene key="timeline" title="Timelines">
            <Scene key="timelineList" component={TimelineListView} hideNavBar={true} title="" panHandlers={null} />
            <Scene key="timelineDetail" component={TimelineDetailView} hideNavBar={true} title="" panHandlers={null} hideTabBar={true}/>
            <Scene key="addFeeds" component={AddFeeds} hideNavBar={true} title="" panHandlers={null} hideTabBar={true}/>
        </Scene>
    }
}
export default TimelineScene;

