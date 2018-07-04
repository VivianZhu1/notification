import '../styles/App.scss'
import React, { Component } from 'react';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import New from './components/new/New';
import View from './components/View';
import Draft from './components/Draft';
import Footer from './components/Footer'


class Container extends Component {
  render() {
    return (
      <Router>
        <div id="container" className="container">
          <Header/>
          <Link to='/new' className="btn btn-info tab">New</Link> &nbsp;
            <Link to='/draft' className="btn btn-info tab">Draft</Link> &nbsp;
            <Link to='/template' className="btn btn-info tab">Template</Link> &nbsp;
            <Link to='/view' className="btn btn-info tab">View/Edit</Link>
            
          <div id="router" className="container my-container">          
            <Switch>
              <Route exact path="/" component={ New }/>
              <Route path="/new" component={ New }/>
              <Route path="/view" component={ View }/>  
              <Route path="/draft" component= { Draft}/>
              <Route path="/template" render={ ()=>(<h1>TO BE CONTINUE...</h1>)}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Container;
