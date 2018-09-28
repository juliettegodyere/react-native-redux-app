import React, { Component } from 'react';
import {Fab} from 'native-base';
import { View } from 'react-native';
​export default class FabIcon extends Component {
  constructor() {
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
        <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#c44569' }}
        position="bottomRight"
        onPress={this._onPressFabButton}>
        <Icon name="filter" />
    </Fab>  
    );
  }
}