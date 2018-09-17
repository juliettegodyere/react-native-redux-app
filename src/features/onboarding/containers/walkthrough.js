import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { OnboardingActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class WalkthroughView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }
    componentWillMount() {
        if (this.props.onboarding.walktrough_index >= 3) {
            //Actions.push('invitation');
        }
    }
    onNext() {
        this.props.setIntroWalkthroughIndex(3);
        Actions.push('invitation');
    }
    renderWalkthroughStep(data, index) {
        return <ListItem key={index} thumbnail style={{ paddingBottom: rh(5) }}>
            <Left>
                <View style={[Styles.walkthrough_index]}>
                    <Text style={[Styles.h3, Styles.link,{ paddingBottom: rh(0) }]}>{index + 1}</Text>
                </View>
            </Left>
            <Body>
                <Text style={[Styles.h4]}>{data.title}</Text>
                <Text style={[Styles.h5]}>{data.description}</Text>
            </Body>
        </ListItem>
    }

    render() {
        let d = this.props.layout;
        let items = [
            { title: 'Sign Up', description: 'All you need is your phone number' },
            { title: 'Save Money', description: 'Buy discounted prepaid credit for your regular purchases such as food, transport tickets, toll fees etc' },
            { title: 'Save Time', description: 'Anywhere you need to pay, just scan the Micropay app. It\'s super fast' }
        ];

        return (
            <Container style={[Styles.container]}>
                
                <Header style={Styles.header} noLeft>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Body>
                        <Title style={Styles["header.title"]}>Brief Intro</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onNext}><Text style={Styles["header.link"]}>Skip</Text></Button>
                    </Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={{ justifyContent: 'space-evenly', padding: rh(2.5, d) }}>
                        <Text style={Styles.h1}>Hi there,</Text>
                        <Text style={Styles.h3}>Here is how Micropay GO works</Text>
                        <List>{
                            items.map(this.renderWalkthroughStep)
                        }
                        </List>
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
export default connect(mapStateToProps, mapDispatchToProps)(WalkthroughView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    walkthrough_index: {
        borderRadius: rh(4),
        alignItems: 'center',
        justifyContent: 'center',
        height: rh(8),
        width: rh(8),
        backgroundColor: '#F2F6fE'//FeatureStyles.btnPrimary.backgroundColor
    }
});
