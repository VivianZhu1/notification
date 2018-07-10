import React, { Component } from 'react';

const radioBtnStyle ={
    marginLeft:"30px",
    marginRight:"120px",
    fontSize:"10pt",
    display:"inline-block"
}

export default class NtfCategory extends Component{
    render(){

        return(
            <div id="category" style={{margin:"50px", fontSize:"10pt",color:"#0f5b67", fontWeight:"bolder"}}>
                <div className="form-check" style={radioBtnStyle}>
                    <input className="form-check-input" name="group100" type="radio" id="radio100"/>
                    <label className="form-check-label" htmlFor="radio100">Announcement</label>
                </div>

                <div className="form-check" style={radioBtnStyle}>
                    <input className="form-check-input" name="group100" type="radio" id="radio101" defaultChecked="true"/>
                    <label className="form-check-label" htmlFor="radio101">Marketing</label>
                </div>
            </div>
        );
    }
}