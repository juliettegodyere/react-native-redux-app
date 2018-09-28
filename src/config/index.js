import thunk from 'redux-thunk';
import _ from 'lodash';

//import AppScene from '../scenes';
import TimelineScene from '../features/timelines/scenes';
import UserScene from '../features/users/scenes';
import GroupsScene from '../features/groups/scenes';
import EventsScene from '../features/events/scenes';
import DiscoverScene from '../features/discover/scenes';
import EventsMainScene from '../features/eventsMain/scenes';
import SortMainScene from '../features/sortContent/scenes';
import OnBoardingScene from '../features/onBoarding/scenes';

const Config = {
    redux: {
        state_key: '@Micropay:state',
        middlewares: [thunk],
        reducers: {
            //...AppScene.reducer,
            ...OnBoardingScene.reducer,
            ...TimelineScene.reducer,
            ...UserScene.reducer,
           ...GroupsScene.reducer,
            ...EventsScene.reducer,
            ...DiscoverScene.reducer,
            ...EventsMainScene.reducer,
            ...SortMainScene.reducer
        }
    },
  
    scenes: [
        //OnBoardingScene,
        //SortMainScene,
       //EventsMainScene,
       //DiscoverScene,
        //EventsScene,
        GroupsScene,
        //UserScene,
        [TimelineScene,DiscoverScene],
        //AppScene,
        //DiscoverScene,
        TimelineScene
    ]
}
export default Config;
