//import { Endpoints } from '../../../config/endpoints';
import { Endpoints } from '../config/endpoints';
import { AsyncFlowStatus, HttpUtils, LogUtils } from '../../../utils';

const Types = {
    GET_USER_DATA_LOADING: "GET_USER_DATA_LOADING",
    GET_USER_DATA_RECIVED: "GET_USER_DATA_RECIVED",
    GET_USER_DATA_ERROR:   "GET_USER_DATA_ERROR"
}

const Actions = {
    // Legal Agreements
    fetchUserLoading: () => {
        return { type: Types.GET_USER_DATA_LOADING }
    },
    fetchUserReceived: (users) => {
        return { type: Types.GET_USER_DATA_RECIVED, data: {users } }
    },
    fetchUserError: (error) => {
        return { type: Types.GET_USER_DATA_ERROR, data: { error} }
    },
}

function fetchUserLoading() {
    return Actions.fetchUserLoading();
}
function fetchUserReceived(users) {
    return Actions.fetchUserReceived(users);
}
function fetchUserError(error) {
    return Actions.fetchUserError(error);
}

function fetchUsers(){
    return dispatch => {
        dispatch(fetchUserLoading());
        return fetch('https://api.github.com/users?since=135')
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchUserReceived(json));
                return json;
            })
            .catch(error => dispatch(fetchUserError(error)));
    };;
}
//Handle HTTP errors since fetch won't
function handleErrors(response){
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

export const UserActions = {
    Types,
    fetchUsers
}
