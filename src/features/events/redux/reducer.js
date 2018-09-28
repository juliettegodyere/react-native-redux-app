import { EventsActions } from './actions';

const initialState = {
    events:[],
    loading:true,
    error:null
}

const EventsReducer = (state = initialState, action) => {
    console.log('EventsReducer -> action:', action, state);
    switch (action.type) {
        case EventsActions.Types.GET_EVENT_DATA_RECIVED:
           return {
            ...state,
            loading:false,       //set loading to true
            events: action.data.events, // update users array with response data
           }
        default:
        return state;
    }
}

const eventsReducerConfig = {
    events: EventsReducer
};
export default eventsReducerConfig;
