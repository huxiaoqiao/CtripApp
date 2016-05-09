'use strict'

import React, {
    StyleSheet,
    Navigator,
    NavigatorIOS,
    StatusBarIOS,
    Component,
    Text,
    View,
    TabBarIOS
} from 'react-native';

import Home from './views/home';
import Trip_Schedule from './views/trip_schedule';
import Service_Center from './views/service_center';
import My from './views/my';

const HOME_TAB = "homeTab";
const TRIP_SCHEDULE_TAB = "trip_scheduleTab";
const SERVICE_CENTER_TAB = "service_centerTab";
const MY_TAB = "myTab";

// //高亮
 //StatusBarIOS.setStyle('light-content');
// //开启网络状态
// StatusBarIOS.setNetworkActivityIndicatorVisible(true);

export default class Index extends Component{
    constructor() {
      super();
      this.state = {
        selectedTab: HOME_TAB,
        notifCount:0,
        presses: 0,
      };
    }

    setTab(tabId){
      this.setState({selectedTab: tabId})
    }

    _addNavigator(component, title){
      var data = null;
      if(title === '首页'){
        data = this.state.data;
      }
      return <NavigatorIOS
        style={{flex:1}}
        barTintColor="#1EA0DB"
        titleTextColor="#FFFFFF"
        tintColor="#FFFFFF"
        translucent={false}
        initialRoute={{
          component: component,
          title: title,
          passProps:{
            data: data
          }
        }}
      />
    }

    _addTransparentNavigator(name,component){
      return (
        <NavigatorIOS
          style={{flex:1}}
          barTintColor="clearcolor"
          tintColor="clearcolor"
          translucent={true}
          initialRoute={{
            component: component,
            title: null,
          }}
          navigationBarHidden={false}

        />
      );
    }

    _renderContent(pageName: string,num?: number){
      var renderView;
      if(pageName == HOME_TAB){
        renderView = <Home />;
      }else if (pageName == TRIP_SCHEDULE_TAB) {
        renderView = <Trip_Schedule />;
      }else if (pageName == SERVICE_CENTER_TAB) {
        renderView = <Service_Center />;
      }else if (pageName == MY_TAB) {
        renderView = <My />
      }
      return (
        <View styl={styles.pageView}>
          {renderView}
        </View>
      );
    }

    render () {
        return (
            <View style={styles.container}>
                <TabBarIOS tintColor="#1EA0DB" barTintColor="#FEFEFE">
                    <TabBarIOS.Item
                        title='首页'
                        icon={require('./images/tab/tab_item_01.png')}
                        selected={this.state.selectedTab === HOME_TAB}
                        onPress = {() => this.setTab(HOME_TAB)}>
                        {this._renderContent(HOME_TAB)}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                      title="旅行日程"
                      icon={require('./images/tab/tab_item_02.png')}
                      selected={this.state.selectedTab === TRIP_SCHEDULE_TAB}
                      onPress={() => this.setTab(TRIP_SCHEDULE_TAB)}>
                      {this._addNavigator(Trip_Schedule,'旅行日程')}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                      title="客服中心"
                      icon={require('./images/tab/tab_item_03.png')}
                      selected={this.state.selectedTab == SERVICE_CENTER_TAB}
                      onPress={() => this.setTab(SERVICE_CENTER_TAB)}>
                      {this._addNavigator(Service_Center,'客服中心')}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                      title="我的"
                      icon={require('./images/tab/tab_item_04.png')}
                      selected={this.state.selectedTab == MY_TAB}
                      onPress={() => this.setTab(MY_TAB)}>
                      {this._addNavigator(My,'我的')}
                    </TabBarIOS.Item>

                </TabBarIOS>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  transparentNavigator:{
    backgroundColor:'white',
  },
  // 导航栏
  navContainer: {
    backgroundColor: '#81c04d',
    paddingTop: 12,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText:{
    margin: 50,
  },
});
