import '../styles/App.scss'
import React, { Component } from 'react';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header';
import New from './components/new/New';
import View from './components/View';
import Draft from './components/Draft';
import Footer from './components/Footer';

import { Provider} from 'react-redux';
import configureStore from './store/configureStore';
// import * as ntfAction from './actions/NtfAction';
// import {createStore} from 'redux';

// const store = configurateStore()
const store = configureStore();

// store.dispatch(ntfAction.fetchNtfs());

class Container extends Component {
  render() {
    return (
      <Provider store = {store} >
        <Router>
          <div id="container" className="container">
            <Header/>
              <Link to='/new' className="btn btn-info tab">New</Link> 
              <Link to='/view' className="btn btn-info tab">View/Edit</Link>
              <Link to='/draft' className="btn btn-info tab">Draft</Link> 
              <Link to='/template' className="btn btn-info tab">Template</Link> 
                            
            <div id="router" className="container my-container">          
              <Switch>
                <Route exact path="/" component={ New }/>
                <Route path="/new" component={ New }/>
                <Route path="/view" component={ View }/>  
                <Route path="/draft" component= { Draft}/>
                <Route path="/template" render={ ()=>(<h1 style={{height:"200px",textAlign:"center",padding:"50px"}}>TO BE CONTINUE...</h1>)}/>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default Container;
