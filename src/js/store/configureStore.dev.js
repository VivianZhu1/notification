import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

export default function configureStore( initState ){

    const middleware = applyMiddleware( thunkMiddleware,  createLogger());
    
    return createStore(reducers, getInitState(), middleware);

}

const getInitState = () => {

    return ({ ntfs:[
        {"id":"1","createdAt":"2018-07-05T16:39:33.322Z","summary":"Ocie Pacocha","content":"https://s3.amazonaws.com/uifaces/faces/twitter/myastro/128.jpg"},
        {"id":"2","createdAt":"2018-07-05T11:01:18.951Z","summary":"Ivory Morissette","content":"https://s3.amazonaws.com/uifaces/faces/twitter/saarabpreet/128.jpg"},
        {"id":"3","createdAt":"2018-07-06T04:59:51.934Z","summary":"Gilberto Kihn","content":"https://s3.amazonaws.com/uifaces/faces/twitter/rob_thomas10/128.jpg"},
        {"id":"4","createdAt":"2018-07-06T01:47:38.723Z","summary":"Willis Fahey","content":"https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg"},
        {"id":"5","createdAt":"2018-07-05T20:32:31.815Z","summary":"Stevie Durgan","content":"https://s3.amazonaws.com/uifaces/faces/twitter/0therplanet/128.jpg"},
        {"id":"6","createdAt":"2018-07-05T13:53:09.169Z","summary":"Carissa Stark","content":"https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg"},
        {"id":"7","createdAt":"2018-07-06T06:21:32.730Z","summary":"Alana Kshlerin","content":"https://s3.amazonaws.com/uifaces/faces/twitter/vigobronx/128.jpg"},
       ],
     status:"tesing"

    });

}