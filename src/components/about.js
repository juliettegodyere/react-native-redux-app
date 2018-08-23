import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Container, Header, Left, Right, Body, Button, Content } from 'native-base';
import PropTypes from 'prop-types';

import Styles from '../config/styles';

export default class AboutView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container>
            <Header>
                <Body><Text>About Micropay</Text></Body>
                <Right><Button transparent small><Text>Done</Text></Button></Right>
            </Header>
            <Content>
                <Text style={[Styles.h1]}>About</Text>
                <Text style={[Styles.p]}>{this.props.description}</Text>
            </Content>
        </Container>
    }
}
AboutView.PropTypes = {
    //icon_url: PropTypes.string,
    //image_uri: PropTypes.string.isRequired,
    //title: PropTypes.string.isRequired,
    description: PropTypes.string,
    copyright: PropTypes.string,
};