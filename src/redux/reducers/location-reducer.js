import { LocationActions } from '../actions/location-actions';

const initialState = {}

const locationReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case LocationActions.Types.WATCH_GEOLOCATION:
        case LocationActions.Types.UPDATE_GEOLOCATION:
            newState = { ...state, ...action.data };
            break;

        case LocationActions.Types.UNWATCH_GEOLOCATION:
            newState = { ...state, watch_id: null };
            break;
    }
    return newState;
}

export default locationReducer;