import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert , TouchableOpacity} from 'react-native';
import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Card, CardItem, Thumbnail } from 'native-base';

import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import {Actions, ActionConst} from 'react-native-router-flux';
import { t, i18n, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils';
import GlobalStyles from '../config/styles';
import timelineDetail from '../features/timelines/containers/timeline-detail';

//import { splitNumber, currentLocale } from '../utils/i18n';

export default class TimelineCard extends Component {

  
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
    _onPressButton(){
        let values = {
            title: this.props.title,
            subtitle: this.props.subtitle,
            description: this.props.description,
            image_url:this.props.image_url,
            icon_url: this.props.icon_url,
            postedDate: this.props.postedDate,
            duration: this.props.duration,
            eventDate: this.props.eventDate,
            eventTime:this.props.eventTime,
            trainer:this.props.trainer,
            venue:this.props.venue,
            userName:this.props.userName,
            badgeText: this.props.badgeText,//'10% Off'
        };
        Actions.timelineDetail(values);
        //Actions.push({hideTabBar:true});
       //console.log(this.props.layout);
       //Actions.push('timelineDetail');
    }

    render() {
        let d = this.props.layout;
        //console.log(this.props);

        //const {handleCard} = props;
        //let priceParts = splitNumber(this.props.price, 2);
        //let priceLabel = this.props.priceLabel || 'Price';

        return <Card style={Styles.product_container}  >
            <TouchableOpacity onPress={() => Actions.eventsMainDetails()}>
            <CardItem>
              <Left>
                {this.renderThumbnail()}
                <Body style={{flexGrow:1}}>
                <Text style={[Styles.h4, Styles.text, Styles.no_padding]}>{this.props.userName}</Text>
                <Text note style={Styles.subtext}>{this.props.postedDate}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody onInfoPress={this.props.onInfoPress} >
                <Image source={this.props.image_url} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem button style={Styles.price_panel}>
                <Left>
                    <Body style={{ flexGrow: 1 }}>
                        <Text style={[Styles.h4, Styles.text, Styles.no_padding]}>{this.props.title}</Text>
                        <Text note style={Styles.subtext}>{this.props.subtitle}</Text>
                        <Text note style={Styles.footnote}>{this.props.venue}</Text>
                    </Body>
                </Left>

                {/* <Right>
                    <View >
                        <Text note style={Styles.subtext}>{this.props.eventTime} / {this.props.duration}</Text>
                    </View>
                </Right> */}
            </CardItem>
            </TouchableOpacity>
        </Card>
    }
}

TimelineCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    //image_url: PropTypes.Double,
    icon_url: PropTypes.number,
    //postedDate: PropTypes.date,
    duration: PropTypes.string,
    eventDate: PropTypes.string,
    eventTime:PropTypes.string,
    trainer:PropTypes.string,
    venue:PropTypes.string,
    priceLabel: PropTypes.string,
    badgeText: PropTypes.string,
    badgeType: PropTypes.string,
    onInfoPress: PropTypes.func,
    onPricePress: PropTypes.func
};

const Styles = StyleSheet.create({
    ...GlobalStyles,
    product_container: { borderColor: '#ddffff', elevation: 0, marginTop: 20, marginBottom: 20, borderRadius: 2, shadowRadius: 0},
    info_panel: { alignItems: 'flex-start', borderColor: '#dfdfdf', borderTopStartRadius: 20, borderTopEndRadius: 20 },
    price_panel: { backgroundColor: '#ffffff', borderBottomStartRadius: 20, borderBottomEndRadius: 20 },
    info_icon_panel: { justifyContent: 'flex-end' },
    info_icon: { alignSelf: 'flex-end' },
    price_icon_panel: { justifyContent: 'flex-end' },
    price_icon: { alignSelf: 'flex-end' },
    no_padding: { paddingBottom: 0 }
});
