import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import reducer from './reducers';

const DEFAULT_STATE_KEY = '@App:state';


let middlewares = [thunk/*, logger*/];
const store = createStoreWithReducers({ reducers, middlewares, persist_store: true });
const persistor = persistStore(store);
export { store, persistor };

/*
function logger({ getState }) {
    return next => action => {
        console.warn('will dispatch', action)

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action)

        console.warn('state after dispatch', getState())

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue
    }
}*/