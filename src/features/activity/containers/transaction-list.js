import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, Tabs, Tab, TabHeading, List, ListItem, Button, Title, Icon, Separator } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActivityActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ListItemTextInput from '../../../components/listitem_text_input';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import { i18n } from '../../../utils/i18n';

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

    renderTabHeading(label) {
        return <TabHeading style={Styles.tabs}><Text style={Styles.tabs}>{label}</Text></TabHeading>
    }

    renderTransactions(tx) {
        if (!tx.time) {
            return <ListItem key={tx.id} itemDivider>
                <Text>{tx.title}</Text>
            </ListItem>
        } else {
            return<ListItem key={tx.id} noIndent>
                <Body>
                    <Text style={Styles.text}>{tx.title}</Text>
                    <Text note style={Styles.footnote}>{tx.time}</Text>
                </Body>
                <Right><Text>{i18n.toNumber(tx.amount, { precision: 2 })}</Text></Right>
            </ListItem>
        }
    }

    render() {
        let d = this.props.layout;
        let allTransactions = [
            {title: 'Jun 10, 2018'},
            {title: 'Lekki Concession Company', time: '3:35pm', amount: -400},
            {title: 'Chicken Republic', time: '2:15pm', amount: 5000},
            
            {title: 'May 21, 2018'},
            {title: 'Uber', time: '9:30pm', amount: -1650},
            {title: 'Lagos BRT', time: '8:02pm', amount: 2000},
            {title: 'Lagos BRT', time: '7:15pm', amount: -200},
            
            {title: 'April 17, 2018'},
            {title: 'Total Nigeria', time: '5:05pm', amount: -4000},
            {title: 'Lagos BRT', time: '7:59am', amount: -200}
        ]
        allTransactions.forEach((tx, index) => tx.id='tx-'+index);
        let txIn = allTransactions.filter((tx, index) => !tx.time || tx.amount > 0);
        let txOut = allTransactions.filter((tx, index) => !tx.time || tx.amount < 0);

        return (
            <Container style={[Styles.container]}>
                <Header style={[Styles.header, {borderBottomWidth: 0}]} noLeft hasTabs>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left/>
                    <Body >
                        <Title style={Styles['header.title']}>Receipts</Title>
                    </Body>
                    <Right><Button large transparent iconRight><Icon name='ios-funnel' /></Button></Right>
                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: Styles.tabs.borderColor }}>
                    <Tab heading={this.renderTabHeading('All')}>
                        <Content containerStyle={{ backgroundColor: '#fff' }}>
                            <List>
                                <ListItem first noIndent>
                                    <Left><Text note style={Styles.footnote}>From Jan 01, 2018 to Jun 10, 2018</Text></Left>
                                    <Right><Text>₦</Text></Right>
                                </ListItem>
                                {allTransactions.map(this.renderTransactions)}
                            </List>
                        </Content>
                    </Tab>
                    <Tab heading={this.renderTabHeading('In')}>
                        <Content containerStyle={{ backgroundColor: '#fff' }}>
                            <List>
                                <ListItem first noIndent>
                                    <Left><Text note style={Styles.footnote}>From Jan 01, 2018 to Jun 10, 2018</Text></Left>
                                    <Right><Text>₦</Text></Right>
                                </ListItem>
                                {txIn.map(this.renderTransactions)}
                            </List>
                        </Content>
                    </Tab>
                    <Tab heading={this.renderTabHeading('Out')}>
                        <Content containerStyle={{ backgroundColor: '#fff' }}>
                            <List>
                                <ListItem first noIndent>
                                    <Left><Text note style={Styles.footnote}>From Jan 01, 2018 to Jun 10, 2018</Text></Left>
                                    <Right><Text>₦</Text></Right>
                                </ListItem>
                                {txOut.map(this.renderTransactions)}
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
    return bindActionCreators(ActivityActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionListView)

const Styles = StyleSheet.create({
    ...FeatureStyles
});
