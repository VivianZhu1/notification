import React, {Component} from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NtfConfig from './NtgConfig'
import NtfCalender from './NtfCalender';
import NtfSeverity from './NtfSeverity'



const pStyle= {marginTop:"30px", fontWeight:"bold"};


export default class New extends Component{
    render(){
        return(
            <div style={{marginLeft:"20px"}}>
                <br/>
                <form className="form-control">
                  <p style={pStyle}>Step1: Notification Summary</p>   
                  <input className="ntf-input" style={{width:"600px"}} placeholder="Summary about..."/> 


                  <p style={pStyle} >Step2: Notification Configurations</p>   
                   <NtfConfig/>

                  <div style={pStyle}>
                  Step3: Notification Text (Optional)
                  <p style={{fontSize:"8pt", display:"inline-block", marginLeft:"80px"}} >   HTML format supported </p>   
                  <a style={{fontSize:"8pt", display:"inline-block",  marginLeft:"60px"}}  href="#">  Download sample </a>   
                  </div>
                   <textarea className="ntfTextArea"/>

                  <p style={pStyle} >Step4: Notification Text (Optional)</p>   
                  <div id="tag">
                    <input className="ntf-input" style={{width:"400px",  marginLeft:"3px"}} placeholder="Add tag..."/>
                    <button className="btn btn-info cfg_btn">ADD TAG</button>
                    <textarea className="ntfTextArea"/>
                  </div>
                
                  <p style={pStyle} >Step5: Time Period</p>   
                    <div id="datepicker" style={{display:"inline-flex",marginBottom:"30px", fontSize:"11pt"}}>
                        Start Date:  &emsp; <NtfCalender id="startDate"/> &emsp; &emsp; &emsp; &emsp;
                        End Date: &emsp;<NtfCalender id="endDate"/>
                    </div>

                 <hr/>
                 <div id="buttons" style={{display:"inline-block",marginBottom:"20px", marginTop:"20px"}}>
                    <button className="btn btn-success my-success">Preview</button>
                    <button className="btn btn-success my-success">Create</button>
                    <button className="btn btn-success my-success">Save</button>
                    <button className="btn btn-success my-success">Save as Template</button>
                 </div> 
                </form>
               <br/>    
            </div>
        );
    }

}
