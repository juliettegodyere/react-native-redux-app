import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Separator, Thumbnail, Footer } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TopupActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ListItemTextInput from '../../../components/listitem_text_input';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import { i18n } from '../../../utils/i18n';

class CategoryListView extends Component {
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
        let priceParts = {integer: 25000, fraction: 0}
        return (
            <Container style={[Styles.container]}>
                <Header style={[Styles.btnSecondary, {borderBottomWidth: 0}]}>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.btnSecondary.backgroundColor} />
                    <Left><Icon name='arrow-back' /></Left>
                    <Body >
                        <Title style={Styles["headerAlt.title"]}>Checkout</Title>
                    </Body>
                    <Right/>
                </Header>
                
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View vertical style={[Styles.btnSecondary, {  alignItems: 'center', justifyContent: 'flex-start', padding: rh(7.5, d) }]}>
                        <Thumbnail source={require('../../../assets/img/chickenrepublic.png')} />
                        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={[Styles.h5, Styles.no_padding, {fontSize: rf(4,d)}]}>₦ </Text>
                            <Text style={[Styles.h3, Styles.no_padding, {fontSize: rf(8,d)}]}>{i18n.toNumber(priceParts.integer, { precision: 0 })}</Text>
                            <Text style={[Styles.h5, Styles.no_padding, {fontSize: rf(4,d)}]}>.{priceParts.fraction < 10 ? '0' : ''}{priceParts.fraction.toFixed(0)} </Text>
                        </View>
                        <Text style={[Styles.h6, Styles.no_padding]}>This prepaid credit is issued by Food Concepts Plc</Text>
                    </View>
                    <List>
                        <ListItem first>
                            <Left><Text>Discount</Text></Left>
                            <Body><Text style={{alignSelf: 'flex-end'}}>₦100</Text></Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Button small transparent style={{marginTop:-5, marginBottom:-5}}>
                                    <Text style={Styles.link}>Use Free Credits</Text>
                                </Button>
                            </Body>
                            <Right><Text style={{alignSelf: 'flex-end'}}>₦0</Text></Right>
                        </ListItem>
                        <ListItem last>
                            <Left><Text>Amount to Pay</Text></Left>
                            <Body><Text style={[Styles.h4, Styles.link, Styles.no_padding, {alignSelf: 'flex-end'}]}>₦24,900</Text></Body>
                        </ListItem>
                    </List>
                </Content >

                <Footer>
                    <View style={{width: '100%'}}>
                        <Button large transparent full onPress={this.onNext} style={[Styles.btnPrimary]}>
                            <Text style={[Styles.btn, Styles.btnLarge, Styles.btnPrimaryText, Styles.welcome_text, { padding: rw(2, d) }]}>
                                Pay
                            </Text>
                        </Button>
                    </View>
                </Footer>
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return { onboarding: state.onboarding, layout: state.layout }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(TopupActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    no_padding: { paddingBottom: 0 }
});