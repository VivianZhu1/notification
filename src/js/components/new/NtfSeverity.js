import React, {Component} from 'react';


    const rangeStyle={ 
        position:"relative", 
        top:"50px", 
        width:"80%", 
    }



export default class NtfSeverity extends Component{

    constructor(props) {
        super(props);
     
        this.state = { value: 10 };
      }

    render(){

        return(
          <div id="severity" style={{textAlign:"center", height:"150px"}}>                
            <input type="range" list="tickmarks" min="1" max="4" id="bar" style={rangeStyle}/>
            <datalist id="tickmarks">
                <option value="1" label="1"/>
                <option value="2" label="2"/>
                <option value="3" label="3"/>
                <option value="4" label="4"/>
            </datalist>

            <label htmlFor="bar" className="highest">Highest</label>
            <label htmlFor="bar" className="svry1">1</label>
            <label htmlFor="bar" className="svry2">2</label>
            <label htmlFor="bar" className="svry3">3</label>
            <label htmlFor="bar" className="svry4">4</label>
            
                
         </div>
        );
    }
}