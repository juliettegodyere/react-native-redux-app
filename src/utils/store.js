import { createStore, combineReducers, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const DEFAULT_STATE_KEY = '@App:state';

export const StoreUtils = {
    createStore: (config) => {
        console.log('createStore:', config)
        let reducer = combineReducers(config.reducers);

        let persistenceConfig = {
            key: config.state_key || DEFAULT_STATE_KEY, //'@Micropay:state',
            storage,
            stateReconciler: hardSet,
            blacklist: ['secrets']
        }
        reducer = persistReducer(persistenceConfig, reducer);

        let store = createStore(reducer, applyMiddleware(...config.middlewares));
        let persistor = persistStore(store);
        return { store, persistor };
    },
    createLoggerMiddleware: ({ getState }) => {
        return next => action => {
            console.warn('will dispatch', action)

            // Call the next dispatch method in the middleware chain.
            let returnValue = next(action)

            console.warn('state after dispatch', getState())

            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue
        }
    }
}