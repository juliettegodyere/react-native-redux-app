import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Separator, Icon, Item, Input, Thumbnail } from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome5';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TopupActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import ListItemTextInput from '../../../components/listitem_text_input';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';

class CategoryListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    onNext() {
        //this.props.activateUser(this.state);
        // /Actions.push('invitation');
    }

    renderCategory(category, index) {
        return <ListItem key={'category-' + category.code} icon>
            <Left><Button transparent><FAIcon name={category.icon} size={20} color="#0061FE" /></Button></Left>
            <Body><Text>{category.name}</Text></Body>
            <Right><Icon name="arrow-forward" /></Right>
        </ListItem>

    }

    renderFeaturedItem({item}) {
        return <View style={{width:rw(22), paddingTop: rh(1.5), paddingRight: rw(5)}} >
            <Button transparent large rounded onPress={() => console.log('press')}><Thumbnail source={item.icon_url}/></Button>
        </View>
    }

    render() {
        let d = this.props.layout;
        let items = [
            { code: 'tolls', name: 'Tolls', icon: 'car' },
            { code: 'food', name: 'Restaurants & Bars', icon: 'utensils' },
            { code: 'transport', name: 'Public Transportation', icon: 'bus' },
            { code: 'taxi', name: 'Taxi Services', icon: 'taxi' },
            { code: 'fuels', name: 'Fuel Stations', icon: 'gas-pump' },
            { code: 'carparks', name: 'Car Parks', icon: 'parking' },
            { code: 'beauty', name: 'Hair & Beauty Salons', icon: 'cut' },
            { code: 'retail', name: 'Retail Outlets', icon: 'shopping-basket' },
            { code: 'digital', name: 'Digital Content', icon: 'cloud-download-alt' },
        ]
        let featuredItems = [
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
            {
                title: 'Mobile Nigeria Plc',
                subtitle: 'Fuel Stations',
                description: null,
                icon_url: require('../../../assets/img/mobil.jpg'),
                price: 28800.29,
                priceLabel: 'Balance',
                currency: '₦',
                badgeText: null,//'10% Off'
            },
            {
                title: 'Uber',
                subtitle: 'Taxi Services',
                description: null,
                icon_url: require('../../../assets/img/uber.png'),
                price: 8900.50,
                priceLabel: 'Balance',
                currency: '₦',
                badgeText: null,//'10% Off'
            },

        ]
        return (
            <Container style={[Styles.container]}>
                <Header searchBar rounded style={Styles.header}>
                    <StatusBar backgroundColor={Styles.header.backgroundColor} />
                    <Item>
                        <Icon name="ios-search" />
                        <Input keyboardType="web-search" placeholder="Search by keyword" />
                    </Item>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={{ justifyContent: 'space-evenly', padding: rh(2.5, d)}}>
                        <Text style={Styles.h5}>Featured Deals</Text>
                        <FlatList
                            horizontal
                            data={featuredItems}
                            renderItem={this.renderFeaturedItem}
                            keyExtractor={(item, index) => 'featured-item-' + index}
                            />
                    </View>
                    <List>
                        <Separator bordered />
                        {
                            items.map(this.renderCategory)
                        }
                    </List>
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView)

const Styles = StyleSheet.create({
    ...FeatureStyles
});
