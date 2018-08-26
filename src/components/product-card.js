import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Card, CardItem, Thumbnail } from 'native-base';

import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { t, i18n, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils';
import GlobalStyles from '../config/styles';
import { splitNumber, currentLocale } from '../utils/i18n';

export default class ProductCard extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    renderThumbnail() {
        return (this.props.icon_url)
            ? <Thumbnail source={this.props.icon_url} />
            : null;
    }

    renderBadge() {
        return (this.props.badgeText)
            ? <Badge success style={{ justifyContent: 'center' }}><Text style={{ color: '#fff', fontSize: 12 }}>{this.props.badgeText}</Text></Badge>
            : null;
    }

    renderInfoIcon() {
        return this.props.description
            ? <View style={Styles.info_icon_panel}>
                <Right><Icon name="information-circle" style={Styles.info_icon} /></Right>
            </View>
            : null;
    }

    render() {
        let d = this.props.layout;
        let priceParts = splitNumber(this.props.price, 2);
        console.log(priceParts, priceParts.integer.toLocaleString(), priceParts.fraction.toFixed(2))
        let priceLabel = this.props.priceLabel || 'Price';

        return <Card style={Styles.product_container}>
            <CardItem header bordered style={Styles.info_panel} onInfoPress={this.props.onInfoPress}>
                <Left>
                    {this.renderThumbnail()}
                    <Body style={{ flexGrow: 1 }}>
                        <Text style={[Styles.h4, Styles.text, Styles.no_padding]}>{this.props.title}</Text>
                        <Text note style={Styles.subtext}>{this.props.subtitle}</Text>
                    </Body>
                </Left>
                {this.renderInfoIcon()}

            </CardItem>
            <CardItem button style={Styles.price_panel} onPricePress={this.props.onPricePress}>
                <Left>
                    <View vertical>
                        <Button badge small full transparent style={[Styles.h3, { paddingBottom: 0, textAlign: 'left' }]}>
                            <Text style={[Styles.h5, Styles.link, Styles.no_padding]}>{this.props.currency} </Text>
                            <Text style={[Styles.h3, Styles.link, Styles.no_padding]}>{i18n.toNumber(priceParts.integer, { precision: 0 })}</Text>
                            <Text style={[Styles.h5, Styles.link, Styles.no_padding]}>.{priceParts.fraction < 10 ? '0' : ''}{priceParts.fraction.toFixed(0)} </Text>
                            {this.renderBadge()}
                        </Button>
                    </View>
                </Left>
                <Right>
                    <View style={Styles.price_icon_panel}>
                        <Icon name="arrow-forward" />
                    </View>
                </Right>
            </CardItem>
        </Card>
    }
}

ProductCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    icon_url: PropTypes.number,
    currency: PropTypes.string,
    price: PropTypes.number,
    priceLabel: PropTypes.string,
    badgeText: PropTypes.string,
    badgeType: PropTypes.string,
    onInfoPress: PropTypes.func,
    onPricePress: PropTypes.func
};

const Styles = StyleSheet.create({
    ...GlobalStyles,
    product_container: { borderColor: '#dfdfdf', elevation: 1, marginTop: 20, marginBottom: 20, borderRadius: 20, shadowRadius: 10 },
    info_panel: { alignItems: 'flex-start', borderColor: '#dfdfdf', borderTopStartRadius: 20, borderTopEndRadius: 20 },
    price_panel: { backgroundColor: '#F2F6fE', borderBottomStartRadius: 20, borderBottomEndRadius: 20 },
    info_icon_panel: { justifyContent: 'flex-end' },
    info_icon: { alignSelf: 'flex-end' },
    price_icon_panel: { justifyContent: 'flex-end' },
    price_icon: { alignSelf: 'flex-end' },
    no_padding: { paddingBottom: 0 }
});


