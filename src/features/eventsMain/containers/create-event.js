import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';

export default class AddFeeds extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          
        </Content>
      </Container>
    );
  }
}