import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Separator, Icon, Item, Input, Subtitle } from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome5';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TopupActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ProductCard from '../../../components/product-card';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class VoucherListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    onNext() {
        //this.props.activateUser(this.state);
        // /Actions.push('invitation');
    }

    renderVoucher(category, index) {
        return <ListItem key={'category-' + category.code} icon>
            <Left><Button transparent><FAIcon name={category.icon} size={20} color="#0061FE" /></Button></Left>
            <Body><Text>{category.name}</Text></Body>
            <Right><Icon name="arrow-forward" /></Right>
        </ListItem>

    }

    render() {
        let d = this.props.layout;
        let items = [
            {
                title: 'Chicken Republic',
                subtitle: 'Food & Drink',
                description: null,
                icon_url: require('../../../assets/img/chickenrepublic.png'),
                price: 5000,
                priceLabel: 'Price',
                currency: '₦',
                badgeText: '₦100 Off'
            },
            {
                title: 'Chicken Republic',
                subtitle: 'Food & Drink',
                description: null,
                icon_url: require('../../../assets/img/chickenrepublic.png'),
                price: 10000,
                priceLabel: 'Price',
                currency: '₦',
                badgeText: '₦500 Off'
            },
            {
                title: 'Chicken Republic',
                subtitle: 'Food & Drink',
                description: null,
                icon_url: require('../../../assets/img/chickenrepublic.png'),
                price: 20000,
                priceLabel: 'Price',
                currency: '₦',
                badgeText: '₦1000 Off'
            },

        ]
        return (
            <Container style={[Styles.container]}>
                <Header style={Styles.header}>
                    <StatusBar backgroundColor={Styles.header.backgroundColor} />
                    <Left><Icon name='arrow-back' /></Left>
                    <Body >
                        <Title style={Styles['header.title']}>Results</Title>
                        <Subtitle>Food & Drink</Subtitle>
                    </Body>
                    <Right><Button large transparent iconRight><Icon name='ios-funnel' /></Button></Right>

                </Header>
                <Content padder contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={{ justifyContent: 'space-evenly', padding: rh(2.5, d), paddingBottom: 0 }}>
                        <Text style={Styles.h4}>We found 300 deals</Text>
                    </View>

                    {items.map((item, index) => {
                        return <ProductCard key={'product-' + index} {...item} />
                    })}
                </Content >
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
export default connect(mapStateToProps, mapDispatchToProps)(VoucherListView)

const Styles = StyleSheet.create({
    ...FeatureStyles
});
