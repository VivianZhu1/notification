import '../css/App.css'
import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Header from './components/Header';
import New from './components/New';
import View from './components/View';
import Draft from './components/Draft';


class Container extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        {/* <button className="btn btn-info">NEW
          <Link to='/new'></Link>
        </button> */}
        <Link to='/new' className="btn btn-info">New</Link>

        <Switch>
     
          <Route exact path="/" compoennt={ New }/>
          <Route path="/new" compoent={ New }/>
          <Route path="/view" component={ View }/>
          <Route path="/draft" component= { Draft}/>
          <Route path="/template" render={ ()=>(<h1>TO BE CONTINUE...</h1>)}/>
        </Switch>
      </div>
    );
  }
}

export default Container;
