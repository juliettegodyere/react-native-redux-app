import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon,Thumbnail, Fab } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EventsActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import CircularButton from '../../../components/circular-button';
import SearchBar from '../../../components/search-bar';
import UserList from '../../../components/user-list';
import FabComponent from '../../../components/fab'

class EventsView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            toggle:false,
            active:'true'
        };
    }
    // componentWillMount() {
    //     if (this.props.onboarding.walktrough_index >= 3) {
    //         //Actions.push('invitation');
    //     }
    // }
    // onNext() {
    //     this.props.setIntroPinIndex(3);
    //     Actions.push('invitation');
    // }

   componentDidMount(){
       this.props.fetchEvents();
   }
   _onPressFollowButton (){
        this.setState({toggle:!this.state.toggle})
    }
    _onPressFabButton (){
        this.setState({active:!this.state.toggle});
        Actions.timelineList();
    }
   renderThumbnail() {
    return (this.props.icon_url)
        ? <Thumbnail source={this.props.icon_url} />
        : null;
}
    render() {
        let d = this.props.layout;
        //let events = this.props.events.events;
        let {events,loading, error} = this.props;
        console.log('props:',this.props);
        console.log(events);
        // console.log(loading);
       
        if(loading){
            return (
                <View style={Styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }
        return (
            <Container style={[Styles.container]}>
                
                <Header style={Styles.header} hasTabs span>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                       <SearchBar/>
                    </Body>
                    <Right/>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                 <View style={[Styles.userCountStyle]}><Text style={Styles.h3}>600 Events</Text></View>
               <TouchableOpacity>
                <List>
                {events.map((event, index) => {
                    return <ListItem avatar key={index}>
                        <Left>
                            <Thumbnail square source={{uri:event.image_url}} large/> 
                        </Left>
                        <Body>
                            <Text>{event.Title}</Text>
                            <Text note style={Styles.subtext}>{event.author}</Text>
                        </Body>
                        <Right>
                            {!this.state.toggle ? <Button transparent style={{}}  onPress={this._onPressFollowButton}>
                            <Icon name='heart' style={{textAlign:'center', color:'#000000', padding:15}}/></Button>
                            : <Button transparent style={{}} onPress={this._onPressFollowButton}>
                             <Icon name='heart' style={{textAlign:'center', color:'#c44569', padding:15}}/>
                        </Button>}
                        </Right>
                        
                    </ListItem>
                     })}

                    </List>
               </TouchableOpacity>
                </Content >
               <FabComponent/>
            </Container >
            
        );
    }
}

EventsView.propTypes = {
    events:PropTypes.array,
    fetchEvents:PropTypes.func,
    loading:PropTypes.bool,
}
function mapStateToProps(state) {
    return { 
        events: state.events.events.events,
        loading: state.events.loading,
        layout: state.layout,
    }
}
//var fetchUsers = DiscoverActions.fetchUsers;
function mapDispatchToProps(dispatch) {
    return bindActionCreators(EventsActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EventsView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    userCountStyle:{
        flex:1, 
        marginTop:15, 
        padding:10,
        marginLeft:5,
    }
   
});
