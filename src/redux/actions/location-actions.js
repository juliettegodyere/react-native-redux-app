import { Geolocation } from 'react-native';

const Types = {
    WATCH_GEOLOCATION: "WATCH_GEOLOCATION",
    UPDATE_GEOLOCATION: "UPDATE_GEOLOCATION",
    UNWATCH_GEOLOCATION: "UNWATCH_GEOLOCATION"
}

const Actions = {
    // Geo Location
    watchGeolocation: (watchID) => {
        return { type: Types.WATCH_GEOLOCATION, data: { watch_id: watchID } }
    },
    unwatchGeolocation: () => {
        return { type: Types.UNWATCH_GEOLOCATION }
    },
    updateGeolocation: (coordinates = { longitude: null, latitude: null }) => {
        return { type: Types.UPDATE_GEOLOCATION, data: { ...coordinates } }
    }
}

//
// GEO LOCATION ACTIONS
//
const defaultGeolocationOptions = {
    maximumAge: 10000, // 10 seconds
    enableHighAccuracy: false // true = 'GPS', false = 'WiFi'
}

function watchGeolocation(options = defaultGeolocationOptions) {
    return (dispatch, getState) => {
        let state = getState();
        if (!state.watch_id) {
            let watchID = Geolocation.watchPosition((location, options) => {
                dispatch(Actions.updateGeolocation(location));
            });
            dispatch(Actions.watchGeolocation(watchID));
        }
    }
}

function unwatchGeolocation() {
    return (dispatch, getState) => {
        let state = getState();
        if (state.watch_id) {
            Geolocation.clearWatch(state.watch_id);
            dispatch(Actions.unwatchGeolocation());
        }
    }
}

export const LocationActions = {
    Types,
    watchGeolocation,
    unwatchGeolocation
}