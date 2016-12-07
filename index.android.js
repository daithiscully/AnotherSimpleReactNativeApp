/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import { variable, variable2 } from './scripts/my-script';


var First = require('./app/First');
var Second = require('./app/Second');

export default class FirstProject extends Component {
  render() {
    return (
      <Navigator initialRoute = {{id: 'First'}} renderScene={this.navigatorRenderScene} />
    );
  }
  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch (route.id) {
      case 'First':
        return(<First navigator={navigator} title="First" />)
      case 'Second':
        return(<Second navigator={navigator} title="Second" />)

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
