import React, {Component} from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
// import Axios from 'axios';

// const apiUrl = 'http://localhost:8000/proxy/omc/notifications';

// const config = {
//   headers: {'Authorization': '2a690c91bf9ff33dd66ce6ca2494eedcf3160f4984f2f371df2b7e694c95dd84',
//   'Access-Control-Allow-Origin':"http://localhost:8000",
//   'Access-Control-Max-Age': '2520',
//   'Access-Control-Allow-Methods':'PUT, GET'}
// };


export default class Draft extends Component{

    constructor(props){
        super(props);
        this.state = null;

    }

    componentDidMount(){
        // Axios.get(apiUrl);
    }

    render(){
        return(
            <div>
              <Tabs
                    defaultActiveKey="2"
                    // onChange={callback}
                    renderTabBar={()=><ScrollableInkTabBar />}
                    renderTabContent={()=><TabContent />}
                    >
                    <TabPane tab='tab 1' key="1">first</TabPane>
                    <TabPane tab='tab 2' key="2">second</TabPane>
                    <TabPane tab='tab 3' key="3">third</TabPane>
             </Tabs>
        

            </div>
        );
    }

}