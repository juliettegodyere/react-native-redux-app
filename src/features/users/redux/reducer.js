import { UserActions } from './actions';

const initialState = {
    users:[],
    loading:true,
    error:null
}

const UserReducer = (state = initialState, action) => {
    console.log('UserReducer -> action:', action, state);
    switch (action.type) {
        case UserActions.Types.GET_USER_DATA_LOADING:
           return {
               ...state,            //Keep the Existing state
               loading:true,
               error:null         //but change loading to true 
           };
        case UserActions.Types.GET_USER_DATA_RECIVED:
           return {
            ...state,
            loading:false,       //set loading to true
            users: action.data.users, // update users array with response data
           }
        case UserActions.Types.GET_USER_DATA_ERROR:
           return {
               ...state,
               loading:false,
               error:action.data.error,
               users:[]
            };
        default:
        return state;
    }
}

const userReducerConfig = {
    user: UserReducer
};
export default userReducerConfig;
