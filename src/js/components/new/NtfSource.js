import React, { Component } from 'react';

export default class NtfSource extends Component{

    componentWillMount(){

    }

    render(){
        return(
            <div className="container" style={{fontSize:"10pt", display:"inline-block", fontWeight:"bold", color:"#0f5b67"}}> 
                  <div className="row" style={{ marginTop:"20px", marginBottom:"20px" }}>
                    <div className="column" style={{width:"50%", marginLeft:"30px"}}>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox1" defaultChecked="true"/>
                            <label className="form-check-label" htmlFor="checkbox1">Oracle Marketing Cloud</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox2"defaultChecked="true" />
                            <label className="form-check-label" htmlFor="checkbox2">Infinity</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox3"/>
                            <label className="form-check-label" htmlFor="checkbox3">Eloqua</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox4"/>
                            <label className="form-check-label" htmlFor="checkbox4">Responsys</label>
                        </div>
                    </div>

                    <div className="column">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox5"/>
                            <label className="form-check-label" htmlFor="checkbox5">Maxymiser</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox6"/>
                            <label className="form-check-label" htmlFor="checkbox6">Social</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox7"/>
                            <label className="form-check-label" htmlFor="checkbox7">BlueKai</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox8"/>
                            <label className="form-check-label" htmlFor="checkbox8">Compendium</label>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}