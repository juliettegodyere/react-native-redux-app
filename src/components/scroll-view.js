import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";

export default class ScrollViewComponent extends Component {
  render() {
    return (
      <View style={{width:130, marginLeft:20, borderWidth:0.5, borderColor:'#dddddd'}}>
        <View style={{flex:2}}>
            <Image  source={this.props.imageUri} style={{flex:1, width:null,height:null, resizeMode:'cover'}}/>
        </View>
        <View style={{flex:1, paddingLeft:10, paddingTop:10, paddingBottom:25}}>
            <Text style={{fontSize:16, fontWeight:'300', color:'black', paddingBottom:10}}>{this.props.title}</Text>
            <Text>{this.props.subtitle}</Text>
        </View>
    </View>
    );
  }
}