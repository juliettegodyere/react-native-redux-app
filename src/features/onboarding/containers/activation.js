import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Separator } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { OnboardingActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ListItemTextInput from '../../../components/listitem_text_input';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class InvitationView extends Component {
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
                        <Title>Activate</Title>
                    </Body>
                    <Right><Button transparent onPress={this.onNext}><Text>Next</Text></Button></Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={{ height: rh(40, d), justifyContent: 'space-evenly', padding: rh(5, d) }}>
                        <Text style={[Styles.h4, { textAlign: 'center' }]}>We have sent an SMS that contains a 6-digit activation code to +2348028475816</Text>
                        <Text style={[Styles.h4, { textAlign: 'center' }]}>To activate your account, please enter the code below</Text>
                    </View>
                    <View>
                        <Separator bordered />
                        <ListItemTextInput label="Code" keyboardType="number-pad" maxLength={6} placeholder="Type your 6-digit code" />
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
