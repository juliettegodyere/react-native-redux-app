import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity} from "react-native";
import {Actions, ActionConst} from 'react-native-router-flux';

export default class EventsItems extends Component {
  render() {
    return (
        <TouchableOpacity onPress={() => Actions.timelineList()}>
            <View style={{width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth:0.5, borderColor:'#dddddd'}}>
                <View style={{flex:1}}>
                    <Image  
                    source={require('../assets/img/timeline1.jpg')} 
                    style={{flex:1, width:null,height:null, resizeMode:'cover'}
                    }/>
                </View>
                <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-evenly', paddingLeft:10}}>
                    <Text style={{fontSize:14, fontWeight:'bold', color:'#b63838'}}>Fat Incinerator</Text>
                    <Text style={{fontSize:12}}>2 Weeeks</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}