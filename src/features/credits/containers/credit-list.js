import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Thumbnail, Card } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CreditActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ProductCard from '../../../components/product-card';
import CircularButton from '../../../components/circular-button';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class CreditListView extends Component {
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
        let emptyItems = [{
            title: 'It looks like you have no credit yet',
            subtitle: 'Tap the + button below to get started',
            description: null,
            icon_url: null,
            price: 0,
            priceLabel: 'Balance',
            currency: '₦'
        }];

        let items = [
            {
                title: 'Lekki Concession Company',
                subtitle: 'Tolls',
                description: null,
                icon_url: require('../../../assets/img/lcc.png'),
                price: 15000,
                priceLabel: 'Balance',
                currency: '₦',
                badgeText: null,//'10% Off'
            },
            {
                title: 'Chicken Republic',
                subtitle: 'Food & Drink',
                description: null,
                icon_url: require('../../../assets/img/chickenrepublic.png'),
                price: 1260,
                priceLabel: 'Balance',
                currency: '₦',
                badgeText: null,//'10% Off'
            },
            {
                title: 'Total Nigeria Plc',
                subtitle: 'Fuel Stations',
                description: null,
                icon_url: require('../../../assets/img/total.jpg'),
                price: 28800.29,
                priceLabel: 'Balance',
                currency: '₦',
                badgeText: null,//'10% Off'
            },

        ]
        //items = emptyItems;
        let hasCredits = items !== emptyItems;
        return (
            <Container style={[Styles.container]}>
                <Header style={Styles.header} noLeft>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left />
                    <Body >
                        <Title style={Styles['header.title']}>Credits</Title>
                    </Body>
                    <Right >
                        <Button badge transparent style={[Styles.h5, { textAlign: 'right' }]}>
                            <Text style={Styles["header.link"]}>Bonus </Text>
                            <Badge success style={{ justifyContent: 'center' }}><Text style={{ color: '#fff', padding: 4, fontSize: 12 }}>{hasCredits ? '15.5K' : '0'}</Text></Badge>
                        </Button>
                    </Right>
                </Header>
                <Content padder contentContainerStyle={{ width: '100%', justifyContent: 'flex-start' }} >
                    {items.map((item, index) => {
                        return <ProductCard key={'product-' + index} {...item} />
                    })}
                    {!hasCredits ? <View style={Styles.add_button_panel}><CircularButton buttonIcon="add" style={Styles.add_button}/></View> : null}
                </Content >
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
export default connect(mapStateToProps, mapDispatchToProps)(CreditListView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    add_button_panel: {
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        //backgroundColor: '#F2F6fE'//FeatureStyles.btnPrimary.backgroundColor
    },
    add_button: {
        width: 100, height: 100, 
        elevation:10,
        borderWidth: 1,
        fontSize: 60,
        //borderColor: FeatureStyles.link.color,
        color: FeatureStyles.link.color,
        backgroundColor: '#FFF',//'#F2F6fE'
    }
});
