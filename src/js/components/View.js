import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import * as ntfActions from '../actions/NtfAction';
import NtfCalender from '../components/new/NtfCalender';

import '../../styles/View.scss';

const inlineStyle ={
    display:"inline-flex",
    // height:"100px",
    // position:"fixed
    marginBottom:"25px"
}

const calStyle={
    width:"250px",
    color:"#0b7e90",
    fontSize:"11pt",
    fontWeight:"bolder",
}

 class View extends Component{

    constructor(props){
        super(props);
        console.log(props," ### View.props");
        // console.log(props.state," ### props.state");
        // this.state = { ntfs: props.ntfs};
        this.state ={ payload:{ntfs:{}, status:"View"}};
       
    }


    componentDidMount(){
        console.log("begin to fetch")
        // this.state={...this.props.ntfs}
    }

    handleEditNtf(e, id){

        
        console.log(this.state.status)
        document.getElementById(id).classList.toggle("table-editable");
        
    }


    render(){

        return(
            
            <div className="container view-container">
             <p style={{fontSize:"12pt", color:"black", fontWeight:"bolder", marginTop:"20px"}}>Please input Start date and End date to query notifications.</p>
             <hr/>
                <div id="calendar" style={inlineStyle}>         
                   <table>
                    <tbody>
                        <tr>                    
                         <td style={calStyle} > Start Date:  <NtfCalender id="startDate" /></td>
                         <td  style={calStyle} > End Date:  <NtfCalender id="endDate" /></td>
                         <td style={{ width:"120px"}} ><button className="btn btn-success btn-search" onClick={this.props.fetchNtfs } > Search </button></td>
                         <td ><a className="btn btn-danger btn-search" href="/view" > Clear </a></td>
                         </tr>
                     </tbody>
                    </table>
                </div>
             <hr/>
                <table className="table my-table">     
                    <thead className="thead-light">
                    <tr>
                        <th>Summray</th>                        
                        <th>Content</th>
                        <th>CreateAt</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.ntfs.map((n, i) => {
                                return(
                                 <tr key={i} id={i+1}>
                                    <td>{n.summary}</td>
                                    <td ><a href={n.avatar}>{n.avatar}</a></td>
                                    <td>{new Date(n.createdAt).toLocaleDateString('en-US')}</td>
                                    {/* <td>{n.content}</td> */}
                                    {/* <td><Link className="btn btn-primary my-primary" to={'/ntf/${n.id}'}>Edit</Link></td> */}
                                    <td><button className="btn btn-primary my-primary" onClick = {(e) => this.handleEditNtf(e, n.id)}>Edit</button></td>
                                </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps =(state,props) => {
    return{
        ntfs: state.ntfs,  //from reducer when create store
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNtfs: ntfs => dispatch(ntfActions.fetchNtfs()),
        // clearNtfsFromUI: ntfs => dispatch(ntfActions.clearNtfsFromUI())
    }
  };
  

export default connect( mapStateToProps,mapDispatchToProps)(View);