import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Separator } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { OnboardingActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import PhoneInput from '../../../components/phone_input';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class InvitationView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    onNext() {
        this.props.inviteUser('sms', { username: this.state.username });
        Actions.push('activation');
    }

    render() {
        let d = this.props.layout;
        return (
            <Container style={[Styles.container]}>
                <Header>
                    <Left><Icon name='arrow-back' /></Left>
                    <Body >
                        <Title>Your Number</Title>
                    </Body>
                    <Right><Button transparent onPress={this.onNext}><Text>Next</Text></Button></Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={{ height: rh(30, d), justifyContent: 'space-evenly', padding: rh(5, d) }}>
                        <Text style={[Styles.h4, { textAlign: 'center' }]}>Please confirm your country and enter your phone number</Text>
                    </View>
                    <View>
                        <Separator bordered />
                        <PhoneInput intl_dialing_code="+234" placeholder="Type your phone number" />
                        <Separator bordered />
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
    return bindActionCreators(OnboardingActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(InvitationView)

const Styles = StyleSheet.create({
    ...FeatureStyles
});
