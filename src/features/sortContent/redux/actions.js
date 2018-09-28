//import { Endpoints } from '../../../config/endpoints';
//import Events from '../../../config/datasets/events';
import { Endpoints } from '../config/endpoints';
import { AsyncFlowStatus, HttpUtils, LogUtils } from '../../../utils';

const Types = {
    GET_USER_DATA_LOADING: "GET_USER_DATA_LOADING",
    GET_USER_DATA_RECIVED: "GET_USER_DATA_RECIVED",
    GET_USER_DATA_ERROR:   "GET_USER_DATA_ERROR"
}

const Actions = {
    // Legal Agreements
    fetchEventsLoading: () => {
        return { type: Types.GET_USER_DATA_LOADING }
    },
    fetchEventsReceived: (users) => {
        return { type: Types.GET_USER_DATA_RECIVED, data: {users } }
    },
    fetchEventsError: (error) => {
        return { type: Types.GET_USER_DATA_ERROR, data: { error} }
    },
}

function fetchEventsLoading() {
    return Actions.fetchUserLoading();
}
function fetchEventsReceived(users) {
    return Actions.fetchUserReceived(users);
}
function fetchUserError(error) {
    return Actions.fetchUserError(error);
}

function fetchEvents(){
    return dispatch => {
        dispatch(fetchEventsLoading());
        return fetch('../../../config/datasets/events')
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchEventsReceived(json));
                //console.log(json);
                return json;
            })
            .catch(error => dispatch(fetchEventsError(error)));
    };;
}
//Handle HTTP errors since fetch won't
function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const SortActions = {
    // Types,
    // fetchEvents
}
