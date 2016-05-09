'use strict'

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Index from './ctrip/index';

class CtripApp extends Component {
    render() {
        return(
          <Index></Index>
        );
    }
}

AppRegistry.registerComponent('CtripApp',() => CtripApp);
