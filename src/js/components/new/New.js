import React, {Component} from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NtfConfig from './NtgConfig'
import NtfCalender from './NtfCalender';
import NtfTags from './NtfTags';
import *  as ntfAction from '../../actions/NtfAction'


import { connect } from 'react-redux';


const pStyle= {marginTop:"30px", fontWeight:"bold"};

class New extends Component{

    constructor(props){
        super(props);
        console.log(props)
        this.state = {summary:"", content: "", source:[], catetory:"",severity:""};
    }

    createNtf( input ){
        this.props.createNtf(input);
    }

    render(){
        let summaryInput, content = null;
        return(
            <div style={{marginLeft:"20px"}}>
                <br/>
                <form  onSubmit={e => {
                        e.preventDefault();
                        var inputval = {
                        summary: summaryInput.value,
                        // author: authorInput.value,
                        // price: priceInput.value,
                        content: content.value
                        };

                        console.log(inputval);
                        this.createNtf(inputval);
                        e.target.reset();
                    }}
                 className="form-control">
                  <p style={pStyle}>Step1: Notification Summary</p>   
                  <input className="ntf-input" style={{width:"80%"}} placeholder="Summary about..."
                         ref={node => summaryInput = node}/> 


                  <p style={pStyle} >Step2: Notification Configurations</p>   
                   <NtfConfig/>

                  <div style={pStyle}>
                  Step3: Notification Text (Optional)
                  <p style={{fontSize:"8pt", display:"inline-block", marginLeft:"80px"}} >   HTML format supported </p>   
                  <a style={{fontSize:"8pt", display:"inline-block",  marginLeft:"60px"}}  href="/sample">  Download sample </a>   
                  </div>
                   <textarea className="ntfTextArea" placeholder="notificatoin content..."
                            ref={node => content =node}/>

                  <p style={pStyle} >Step4: Add Tags</p>   
                  <div id="tag">
                    <NtfTags />
                  </div>
                
                  <p style={pStyle} >Step5: Time Period</p>   
                    <div id="datepicker" style={{display:"inline-flex",marginBottom:"30px", fontSize:"11pt"}}>
                        Start Date:  &emsp; <NtfCalender id="startDate"/> &emsp; &emsp; &emsp; &emsp;
                        End Date: &emsp;<NtfCalender id="endDate"/>
                    </div>

                 <hr/>
                 <div id="buttons" style={{display:"inline-block",marginBottom:"20px", marginTop:"20px"}}>
                    <button className="btn btn-success my-success">Preview</button>
                    <button className="btn btn-success my-success" type="submit" >Create</button>
                    <button className="btn btn-success my-success">Save</button>
                    <button className="btn btn-success my-success">Save as Template</button>
                 </div> 
                </form>
               <br/>    
            </div>
        );
    }
}

 const mapStateToProps = (state, props) => {
    return{
        ntf: state.ntfs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNtf: ntf => dispatch(ntfAction.createNtf(ntf))
    }
  };
  

export default connect( mapStateToProps,mapDispatchToProps )(New);