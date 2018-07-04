import React, {Component} from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';


export default class Draft extends Component{


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