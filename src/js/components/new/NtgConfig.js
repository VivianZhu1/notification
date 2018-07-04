import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import NtfSource from './NtfSource';
import NtfCategory from './NtfCategory';
import NtfSeverity from './NtfSeverity'

export default class NtfConfig extends Component{
    render(){
        return(
            <Router>
                <div >
                    <Link to="/new/source" className="btn btn-info cfg_btn">Source</Link>
                    <Link to="/new/category" className="btn btn-info cfg_btn">Category</Link>
                    <Link to="/new/severity" className="btn btn-info cfg_btn  ">Severity</Link>

                <div id="ntfConfig" className="ntfConfig">   
                    <Route exact path="/new" component={ NtfSource }/>
                    <Route exact path="/" component={ NtfSource }/>
                    <Route path="/new/source" component={ NtfSource }/>
                    <Route path="/new/category" component={ NtfCategory}/>
                    <Route path="/new/severity" component={ NtfSeverity}/>
                    {/* <Route path="/new/severity" render={ () => (<ul><li>1</li>
                    <li>2</li><li>3</li><li>4</li></ul>)}/> */}
                </div>
                </div>
            </Router>
        );
    }
}