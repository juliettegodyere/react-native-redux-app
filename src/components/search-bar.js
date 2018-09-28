import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
        // <View searchBar rounded>
          <Item>
            {/* <Icon name="ios-search" /> */}
            <Input placeholder="Search for..." style={{fontSize:20}} placeholderTextColor={'#ffffff'}/>
            {/* <Icon name="ios-people" /> */}
          </Item>
        // </View>
    );
  }
}