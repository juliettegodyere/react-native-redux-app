import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab, TouchablaOpacity, Toast} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FabComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      showToast: false,
      isLoggedIn:'true'
    };
  }
  onFabClick(){
    if(false){
      Toast.show({
        text: "Please login to make a post",
        buttonText: "Okay",
        buttonTextStyle: { color: "#008000" },
        position:"top",
        buttonStyle: { backgroundColor: "#5cb85c" }
      })
    }else{
      Actions.addFeeds();
    }
  }
  render() {
    return ( 
           <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#c44569' }}
            position="bottomRight"
            onPress={this.onFabClick}
            >
            <Icon name="ios-add" />
        </Fab>     
       
    );
  }
}