import React, { Component } from 'react';
import { Text,Dimensions, StyleSheet,
    ListView, View ,Image, ScrollView, TouchableOpacity} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Utils from '../utils/helpers';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class ListWithIconAndDetailsComponent extends Component{
    constructor (props) {
        super(props);
        this.itemClicked = Utils.throttle(this.itemClicked, 250, this);
        this.onLongClick = Utils.throttle(this.onLongClick, 250, this);
    }
    itemClicked(){
        this.props.onClick(this.props);
    }
    longClicked(){
        this.props.onLongClick(this.props);
    }
    render(){
        return (
            <TouchableOpacity
                delayLongPress={3800}
                onLongPress ={(e)=>{
                    requestAnimationFrame(() => {
                        this.longClicked();
                    });
                }}
                onPress = {() => {
                    requestAnimationFrame(() => {
                        this.itemClicked();
                    });
                }}
                style={{borderBottomWidth:0.4, borderBottomColor:'#bdc3c7'}}
                underlayColor="#ecf0f1"
            >
                <View style={{flexDirection:'row', margin:responsiveHeight(3), justifyContent:'space-between', alignItems:'flex-start'}}>
                    <View style={{}}>
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#34495e', fontWeight:'bold', fontSize:16}}>{this.props.title}</Text>
                        <Text style={{fontFamily: 'AvenirNext-Medium', color:'#7f8c8d', fontSize:13}}>{this.props.description}</Text>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Icon name={this.props.icon} style={{fontSize:40, color:this.props.iconColor}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

});