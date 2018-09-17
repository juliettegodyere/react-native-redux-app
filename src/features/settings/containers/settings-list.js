import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Separator } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SettingsActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ListItemTextInput from '../../../components/listitem_text_input';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class TransactionListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    onNext() {
        this.props.activateUser(this.state);
        // /Actions.push('invitation');
    }

    render() {
        let d = this.props.layout;
        return (
            <Container style={[Styles.container]}>
                <Header>
                    <Left><Icon name='arrow-back' /></Left>
                    <Body >
                        <Title>Trnasactions</Title>
                    </Body>
                    <Right><Button transparent onPress={this.onNext}><Text>Next</Text></Button></Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={{ height: rh(40, d), justifyContent: 'space-evenly', padding: rh(5, d) }}>
                        <Text style={[Styles.h4, { textAlign: 'center' }]}>My Topups</Text>
                    </View>
                </Content >
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return { onboarding: state.onboarding, layout: state.layout }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(SettingsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionListView)

const Styles = StyleSheet.create({
    ...FeatureStyles
});
