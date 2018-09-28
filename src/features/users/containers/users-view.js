import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon,Thumbnail,Tabs, Fab } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { UserActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import CircularButton from '../../../components/circular-button';
import SearchBar from '../../../components/search-bar';
import UserList from '../../../components/user-list';
//import FabButton from '../../../components/fab-button'

class UsersListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
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
       this.props.fetchUsers();
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
                
                <Header style={Styles.header} span hasTabs searchBar rounded>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        {/* <Title style={Styles["header.title"]}>Following</Title> */}
                                            <SearchBar/>
                    </Body>
                    <Right/>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View style={[Styles.userCountStyle]}><Text style={Styles.h3}>600 Users</Text></View>
                    <View>
                    {users.map((user, index) => {
                        return <UserList key={'user-'+index} {...user}/>
                    })}
                    </View>
                </Content >
            </Container >
        );
    }
}

UsersListView.propTypes = {
    users:PropTypes.array,
    fetchUsers:PropTypes.func,
    loading:PropTypes.bool,
    error:PropTypes.string
}
function mapStateToProps(state) {
    return { 
        users: state.user.users,
        loading: state.user.loading,
        error: state.user.error,
        layout: state.layout,
    }
}
//var fetchUsers = DiscoverActions.fetchUsers;
function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersListView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    userCountStyle:{
        flex:1, 
        marginTop:15, 
        padding:10,
        marginLeft:5,
    }
   
});
