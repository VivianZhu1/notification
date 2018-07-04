import React, {Component} from 'react';

export default class NtfSeverity extends Component{

    render(){

        return(
            <div id="severity" style={{textAlign:"center", height:"150px"}}>                
                {/* <input type="range" id="start" name="volume" min="0" max="11" />
             */}
             <input type="range" list="tickmarks" id="bar" style={{position:"relative", top:"20px"}}/>
                <datalist id="tickmarks">
                    <option value="25" label="1"/>
                    <option value="50" label="2"/>
                    <option value="75" label="3"/>
                    <option value="100" label="4"/>
                </datalist>
                <label for="bar" style={{display:"inline-block"}}>Highest</label>
            </div>
        );
    }
}