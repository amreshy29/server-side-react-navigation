import "regenerator-runtime/runtime";
import React from 'react';
import ProductListing from "./container/product-listing";
import {createStore, applyMiddleware} from 'redux';
import PLPReducers from './reducers/plp-reducers';
import {Provider} from 'react-redux';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import PLPSaga from './actions/sagas';

const saga = createSagaMiddleware();

const store = createStore(PLPReducers, {products : []}, applyMiddleware(saga));

saga.run(PLPSaga);

export default class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ProductListing></ProductListing>
            </Provider>
        )
    }
}