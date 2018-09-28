import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon,Thumbnail } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { GroupsActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import CircularButton from '../../../components/circular-button';
import SearchBar from '../../../components/search-bar';
import UserList from '../../../components/user-list';
import FabComponent from '../../../components/fab'


class GroupsView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
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
       //this.props.fetchGroups();
   }
   renderThumbnail() {
    return (this.props.icon_url)
        ? <Thumbnail source={this.props.icon_url} />
        : null;
}
    render() {
        let d = this.props.layout;
        let {users, loading, error} = this.props;
        console.log('props:',this.props);
        console.log(users);
        console.log(loading);
        if(error){
            return <Text>Error! {error.message}</Text>
        }
        if(loading){
            return <Text>Loading...</Text>
        }
        return (
            <Container style={[Styles.container]}>
                
                <Header style={Styles.header} hasTabs>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-back' onPress={() => Actions.pop()}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={Styles["header.title"]}>Groups</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View>
                        <Text>Group View</Text>
                    </View>
                
                </Content >
                <FabComponent/>
            </Container >
        );
    }
}

GroupsView.propTypes = {
  
}
function mapStateToProps(state) {
    return { 
       
        layout: state.layout,
    }
}
//var fetchUsers = DiscoverActions.fetchUsers;
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(GroupsActions, dispatch)
// }
export default connect(mapStateToProps)(GroupsView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
   
});
