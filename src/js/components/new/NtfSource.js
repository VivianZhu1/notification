import React, { Component } from 'react';

export default class NtfSource extends Component{

    componentWillMount(){

    }

    render(){
        return(
            <div className="container" style={{fontSize:"10pt", display:"inline-block", fontWeight:"bold", color:"#0f5b67"}}> 
                  <div className="row" style={{ marginTop:"20px", marginBottom:"20px" }}>
                    <div className="column" style={{width:"50%", marginLeft:"30px"}}>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox1" checked="false"/>
                            <label className="form-check-label" for="checkbox1">Oracle Marketing Cloud</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox2" checked="false"/>
                            <label className="form-check-label" for="checkbox2">Infinity</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox3"/>
                            <label className="form-check-label" for="checkbox3">Eloqua</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox4"/>
                            <label className="form-check-label" for="checkbox4">Responsys</label>
                        </div>
                    </div>

                    <div className="column">
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox5"/>
                            <label className="form-check-label" for="checkbox5">Maxymiser</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox6"/>
                            <label className="form-check-label" for="checkbox6">Social</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox7"/>
                            <label className="form-check-label" for="checkbox7">BlueKai</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox8"/>
                            <label className="form-check-label" for="checkbox8">Compendium</label>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}