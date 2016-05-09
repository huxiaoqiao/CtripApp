'use strict'

import React,{
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class My extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text >功能待完善...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
