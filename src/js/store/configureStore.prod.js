import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

export default function configureStore( initState ){

    const middleware = applyMiddleware( thunkMiddleware,  createLogger());
    
    return createStore(reducers, initState, middleware);

}