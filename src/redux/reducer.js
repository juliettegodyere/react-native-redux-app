import { combineReducers } from 'redux';

import appReducer from './reducers/app-reducer';
import layoutReducer from './reducers/layout-reducer';
import locationReducer from './reducers/location-reducer';

const rootReducerConfig = {
    app: appReducer,
    layout: layoutReducer,
    location: locationReducer
};
export default rootReducerConfig;