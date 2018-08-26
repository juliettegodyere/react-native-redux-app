import React, { Component } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Thumbnail, Card, Tabs, Tab, Separator, TabHeading } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CreditActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ProductCard from '../../../components/product-card';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import { i18n } from '../../../utils/i18n';

class CreditDetailView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    onNext() {
        this.props.activateUser(this.state);
        // /Actions.push('invitation');
    }

    renderTabHeading(label) {
        return <TabHeading style={Styles.tabs}><Text style={Styles.tabs}>{label}</Text></TabHeading>
    }

    renderProgress() {
        return  <AnimatedCircularProgress
                    size={40}
                    width={2}
                    fill={100}
                    duration={60000}
                    rotation={0}
                    tintColor={Styles.link.color}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#dfdfdf"
                >
                    {
                        (fill) => (
                            <Text style={[Styles.small, Styles.no_padding]}>{((100 - fill) * 0.6).toFixed(0)}</Text>
                        )
                    }</AnimatedCircularProgress>
    }

    render() {
        let d = this.props.layout;

        //items = emptyItems;
        return (
            <Container style={[Styles.container]}>
                <Header style={[Styles.headerAlt, {borderBottomWidth: 0}]} hasTabs>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.headerAlt.backgroundColor} />
                    <Left><Icon name='arrow-back' /></Left>
                    <Body >
                        <Title style={Styles['headerAlt.title']}>Instant Pay</Title>
                    </Body>
                    <Right/>
                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: Styles.tabs.borderColor }}>
                    <Tab heading={this.renderTabHeading('Scan')}>
                        <Content containerStyle={{ backgroundColor: '#fff' }}>
                            <View style={{ justifyContent: 'space-around', paddingTop: 0, paddingBottom: 10, alignItems: 'center' }}>
                                <Image resizeMode="contain" source={require('../../../assets/img/qrcode.png')}
                                    style={{ width: (d.orientation == 'portrait' ? rw(60, d) : rw(30, d)), height: 250, }} />
                                
                            </View>

                            <List>

                                <ListItem last>
                                    <Body style={{alignItems:'center'}}><Text>Valid with Lekki Concession Company</Text></Body>
                                </ListItem>
                                <Separator bordered />
                                <ListItem>
                                    <Left><Text>Balance</Text></Left>
                                    <Body><Text style={{textAlign: 'right'}}>₦{i18n.toNumber(15000, { precision: 2 })}</Text></Body>
                                </ListItem>
                                <ListItem>
                                    <Left><Text>Topup your credit</Text></Left>
                                    <Right><Icon name="arrow-forward" /></Right>
                                </ListItem>
                                <ListItem>
                                    <Left><Text>View past activities</Text></Left>
                                    <Right><Icon name="arrow-forward" /></Right>
                                </ListItem>
                            </List>
                        </Content>
                    </Tab>

                    <Tab heading={this.renderTabHeading('Code')}>
                        <Content containerStyle={{ backgroundColor: '#fff' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10 }}>
                                <Text style={[Styles.link, { fontSize: rf(12, d) }]}>AXV3</Text>
                                <Text style={[Styles.link, { fontSize: rf(12, d) }]}>21C9</Text>
                                {this.renderProgress()}
                            </View>

                            <List>
                                <ListItem last>
                                    <Body style={{alignItems:'center'}}><Text>Valid with Lekki Concession Company</Text></Body>
                                </ListItem>
                                <Separator bordered />
                                <ListItem>
                                    <Left><Text>Balance</Text></Left>
                                    <Body><Text style={{textAlign: 'right'}}>₦{i18n.toNumber(15000, { precision: 2 })}</Text></Body>
                                </ListItem>
                                <ListItem>
                                    <Left><Text>Topup your credit</Text></Left>
                                    <Right><Icon name="arrow-forward" /></Right>
                                </ListItem>
                                <ListItem>
                                    <Left><Text>View past activities</Text></Left>
                                    <Right><Icon name="arrow-forward" /></Right>
                                </ListItem>
                            </List>
                        </Content>
                    </Tab>
                </Tabs>
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return { onboarding: state.onboarding, layout: state.layout }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CreditActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CreditDetailView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    no_padding: { paddingBottom: 0, padding: 0 }
});
