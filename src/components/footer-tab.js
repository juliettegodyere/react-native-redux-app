import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Footer, FooterTab, Button, Icon, Badge } from "native-base";

import autoBind from 'react-autobind';

import GlobalStyles from '../config/styles';

export default class FooterTabView extends Component {
    
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            activeTab: 'Credits'
        };
    }

    renderFooterItem(item, index) {
        let isActive = item.title == this.state.activeTab;
        let hasBadge = item.notifications > 0;
        if (hasBadge) {
            return <Button key={'footer-'+item.title.toLowerCase()} badge vertical style={isActive ? Styles.active : null}>
                <Badge style={{ flexDirection: 'column', padding: 0, justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 12 }}> {item.notifications} </Text>
                </Badge>
                <Icon name={item.icon} style={isActive ? Styles.active : Styles.inactive} />
                <Text style={isActive ? Styles.active : Styles.inactive}>{item.title}</Text>
            </Button>
        } else {
            return <Button key={'footer-'+item.title.toLowerCase()} vertical style={isActive ? Styles.active : null}>
                <Icon name={item.icon} style={isActive ? Styles.active : Styles.inactive} />
                <Text style={isActive ? Styles.active : Styles.inactive}>{item.title}</Text>
            </Button>
        }
    }

    render() {
        let items = [
            {title: 'Credits', icon:'ios-cash', notifications: 0},
            {title: 'Topup', icon:'ios-add-circle', notifications: 0},
            {title: 'Receipts', icon:'ios-filing', notifications: 10},
            {title: 'Settings', icon:'ios-settings', notifications: 0}
        ]
        return <Footer style={Styles.footer}>
            <FooterTab style={{backgroundColor: Styles.footer.backgroundColor}}>
                {items.map(this.renderFooterItem)}
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