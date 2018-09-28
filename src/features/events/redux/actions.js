//import { Endpoints } from '../../../config/endpoints';
import { Endpoints } from '../config/endpoints';
import { AsyncFlowStatus, HttpUtils, LogUtils } from '../../../utils';
import Events from '../../../config/datasets/events';
var data  = Events;


const Types = {
    GET_USER_DATA_LOADING: "GET_USER_DATA_LOADING",
    GET_EVENT_DATA_RECIVED: "GET_EVENT_DATA_RECIVED",
    GET_USER_DATA_ERROR:   "GET_USER_DATA_ERROR"
}

const Actions = {
    // Legal Agreements
    fetchEventsLoading: () => {
        return { type: Types.GET_USER_DATA_LOADING }
    },
    fetchEventsReceived: (events) => {
        return { type: Types.GET_EVENT_DATA_RECIVED, data: {events } }
    },
    fetchEventsError: (error) => {
        return { type: Types.GET_USER_DATA_ERROR, data: { error} }
    },
}

// function fetchEventsLoading() {
//     return Actions.fetchUserLoading();
// }
function fetchEventsReceived(events) {
    return Actions.fetchEventsReceived(events);
}
// function fetchUserError(error) {
//     return Actions.fetchUserError(error);
// }

function fetchEvents(){
    return dispatch => {
        dispatch(fetchEventsReceived(data));
        // return fetch('../../../config/datasets/events')
        //     .then(handleErrors)
        //     .then(res => res.json())
        //     .then(json => {
        //         dispatch(fetchEventsReceived(json));
        //         //console.log(json);
        //         return json;
        //     })
        //     .catch(error => dispatch(fetchEventsError(error)));
    };;
}
//Handle HTTP errors since fetch won't
function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const EventsActions = {
    Types,
    fetchEvents
}
