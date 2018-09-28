import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text,View , Tab, Tabs, List, ListItem, Thumbnail, Fab} from 'native-base';
import FeatureStyles from '../config/styles';

export default class UserList extends Component {
    //const {user} = this.props
    constructor(props){
        super(props);
        autoBind(this);
        this.state = {
            toggle:false
        }
    }
    _onPressButton (){
        this.setState({toggle:!this.state.toggle})
    }
    render() {
     return (
        <TouchableOpacity>
        <List>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={{uri:this.props.avatar_url}} /> 
                </Left>
                <Body>
                    <Text>{this.props.login}</Text>
                    <Text note style={Styles.subtext}>{this.props.type}</Text>
                </Body>
                <Right>
                {!this.state.toggle ? <Button disabled bordered rounded style={{}}><Text  style={{textAlign:'center', color:'#000000', padding:15}} onPress={this._onPressButton}>Follow</Text></Button>
                : <Button bordered danger rounded style={{}} onPress={this._onPressButton}>
                    <Text  style={{textAlign:'center', color:'#c44569', padding:15}}>Following</Text>
                </Button>}
            </Right>
            </ListItem>
            </List>
        </TouchableOpacity>
     )
    }
}
UserList.propTypes = {
    login:PropTypes.string,
    type:PropTypes.string,
}
const Styles = StyleSheet.create({
    ...FeatureStyles,
    Segment:{
        width:'50%',
        borderColor:'transparent',
        backgroundColor:'transparent',
        fontSize:16,
       // marginLeft:20

    }
   
});