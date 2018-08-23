import { LayoutActions } from '../actions/layout-actions';

const initialState = {}

const layoutReducer = (state = initialState, action) => {
    let newState = state;
    //console.log('layoutReducer->action', action);
    switch (action.type) {
        case LayoutActions.Types.UPDATE_ORIENTATION:
            newState = { ...state, ...action.data };
            //console.log('layoutReducer->state1', state);
            //console.log('layoutReducer->state2', newState);
            //console.log('layoutReducer->isEqual', state === newState);
            break;
    }
    return newState;
}

export default layoutReducer;