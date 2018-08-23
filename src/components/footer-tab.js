import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Footer, FooterTab, Button, Icon, Badge } from "native-base";
import autoBind from 'react-autobind';

import GlobalStyles from '../config/styles';

export default class FooterTabView extends Component {
    render() {
        return <Footer>
            <FooterTab style={Styles.footer}>
                <Button active vertical style={Styles.active}>
                    <Icon name="cash" active style={Styles.active} />
                    <Text style={Styles.active}>Credits</Text>
                </Button>
                <Button vertical>
                    <Icon name="add-circle" style={Styles.inactive} />
                    <Text style={Styles.inactive}>Topup</Text>
                </Button>
                <Button badge vertical>
                    <Badge style={{ flexDirection: 'column', padding: 0, justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 12 }}> 1 </Text></Badge>
                    <Icon name="swap" style={Styles.inactive} />
                    <Text style={Styles.inactive}>Activity</Text>
                </Button>
                <Button vertical>
                    <Icon name="ios-settings" style={Styles.inactive} />
                    <Text style={Styles.inactive}>Settings</Text>
                </Button>
            </FooterTab>
        </Footer >
    }
}


const Styles = StyleSheet.create({
    ...GlobalStyles,
    active: {
        backgroundColor: 'transparent',
        color: '#0061FE'
    },
    inactive: {
        backgroundColor: 'transparent',
        color: '#888'
    }
})