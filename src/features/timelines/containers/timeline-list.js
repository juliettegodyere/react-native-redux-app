/**
 * If first time user 1. Check if => followingCount == 0, !inAnyGroup == null, authomaticatically display list of Groups and persons to follow
 * if not a first time user 1. Check if noOfFeeds isEmpty => display a default message else display data
 */

import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Thumbnail, Card } from 'native-base';

import autoBind from 'react-autobind';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TimelineActions } from '../redux/actions';
import {getNav} from '../redux/actions'

import { Actions } from 'react-native-router-flux';

import TimelineCard from '../../../components/timeline-card';
import CircularButton from '../../../components/circular-button';
import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import FabComponent from '../../../components/fab'

class TimelineListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            notInAGroup: false,
            followingCount:0,
            followCount:0,
            isNewUser:false, 
            active:'true'
        };
    }

    // onNext() {
    //     this.props.activateUser(this.state);
    //     // /Actions.push('invitation');
    // }
    renderFeeds(item){

    }
    render() {
        let d = this.props.layout;
        const {scene} = this.props;
        //console.log(scene);
        let emptyItems = [{
            title: 'It looks like you have no available Timelines',
            subtitle: 'Tap the + button below to get started',
            description: null,
            icon_url: null,
        }];

        let items = [
            {
                title: 'How Your Body Changes Once You Start Exercising',
                subtitle: 'See what could happen after a day, a week, a month and a year.',
                description: null,
                image_url:require('../../../assets/img/timeline1.jpg'),
                icon_url: require('../../../assets/img/lcc.png'),
                postedDate: '10hrs',
                userName:'Ogechi',
                duration: '50 mins',
                eventDate: 'Thurday, September 13',
                eventTime:'10:20am',
                trainer:'Alana Joyce',
                venue:'Community Fitness',
                badgeText: null,//'10% Off'
            },
            {
                title: 'Free Gym Classes',
                subtitle: 'Train with the woldes strongest men in our free three day intensive gym class.',
                description: null,
                image_url:require('../../../assets/img/timeline2.jpg'),
                icon_url: require('../../../assets/img/lcc.png'),
                postedDate: '11hrs',
                userName:'Mary Luve',
                duration: '30 mins',
                eventDate: 'Thurday, September 13 - Sunday, September 16',
                eventTime:'6am',
                trainer:'John Doe & Kaffy Sutherland',
                venue:'Community Fitness',
                badgeText: null,//'10% Off'
            },
            {
                title: 'Be the woman you have always wanted to be!',
                subtitle: 'Revenge body class with Kloe Kadashian.',
                description: null,
                image_url:require('../../../assets/img/timeline3.jpg'),
                icon_url: require('../../../assets/img/lcc.png'),
                postedDate: '10mins',
                userName:'Ogechi',
                duration: '1 hour',
                eventDate: 'Mon, August 13',
                eventTime:'8am',
                trainer:'Kloe Kadashian',
                venue:'Community Fitness',
                badgeText: null,//'10% Off'
            },

        ]
        //items = emptyItems;
        let hasTimeline = items !== emptyItems;
        return (
            <Container style={[Styles.container]}>
                <Header style={Styles.header} noLeft>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left />
                    <Body >
                        <Title style={Styles['header.title']}>Home</Title>
                    </Body>
                    <Right >
                        <Button badge transparent style={[Styles.h5, { textAlign: 'right' }]}>
                            <Text style={Styles["header.link"]}>Feeds </Text>
                            <Badge success style={{ justifyContent: 'center' }}><Text style={{ color: '#fff', padding: 4, fontSize: 12 }}>{hasTimeline ? items.length : '0'}</Text></Badge>
                        </Button>
                    </Right>
                </Header>
                <Content padder contentContainerStyle={{ width: '100%', justifyContent: 'flex-start' }} >
                    {items.map((item, index) => {
                        return <TimelineCard key={'product-' + index} {...item} />
                    })}
                    {!hasTimeline ? <View style={Styles.add_button_panel}><CircularButton buttonIcon="add" style={Styles.add_button}/></View> : null}
                </Content >
                <FabComponent />
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return {
        layout: state.layout,
        //...getNav(state),
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(TimelineActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TimelineListView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    add_button_panel: {
        borderRadius: 0,
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



