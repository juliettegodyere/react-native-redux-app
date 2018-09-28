import { TimelineActions } from './actions';
import { ActionConst } from 'react-native-router-flux';

const initialState = {}
const  DEFAULT_STATE = {scene:{}}

const timelineReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case TimelineActions.Types.NAVIGATE_ONCLICK:
            newState = { ...state, ...action.data };
            break;
    }
    return newState;
}
const navReducer = (state = DEFAULT_STATE, type) => {
    switch(type){
        case ActionConst.FOCUS:
        return {
            ...state,
            scene,
        }
        default:
            return state
    }
}
const timelineReducerConfig = {
    timeline: timelineReducer,
    nav :    navReducer
};
//export const getNav = ({nav}) => nav
//export const getTimeline = ({timeline}) => timeline

export default timelineReducerConfig;
