import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,Image, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Utils from '../utils/helpers';
import PropTypes from 'prop-types';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class ListWithImageComponent extends Component{
    constructor (props) {
        super(props);
        this.itemClicked = Utils.throttle(this.itemClicked, 250, this);
    }
    itemClicked(){
        this.props.onClick(this.props);
    }
    renderDescription(){
        if (this.props.description && this.props.description.length){
            return (
                <View style={{flexDirection:'row', justifyContent:'space-between', width:responsiveWidth(70)}}>
                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'#7f8c8d', fontSize:13}}>{this.props.description}</Text>
                </View>
            );
        } else {
            return null;
        }
    }
    render(){
        return (
            <TouchableHighlight
                    onPress={()=>{
                        requestAnimationFrame(() =>{
                            this.itemClicked(this.props.obj);
                        })
                    }}
                    delayLongPress={500}
                    onLongPress ={(e)=>{
                        requestAnimationFrame(() =>{
                            if (this.props.onLongClick){
                                this.props.onLongClick(this.props);
                            }
                        });
                    }}
                    style={{borderBottomWidth:0.4, borderBottomColor:'#bdc3c7'}}
                    underlayColor="#ecf0f1"
                >
                <View style={{flexDirection:'row', margin:responsiveHeight(3), justifyContent:'space-between', alignItems:'flex-start'}}>
                        <View style={{flexDirection:'row', width:responsiveWidth(30)}}>
                            <View style={{paddingTop:responsiveHeight(1)}}>
                                <Image
                                    style={{height:48, width:48, borderRadius:24}}
                                    source={{uri : this.props.image_uri}}
                                />
                            </View>
                            <View
                                style={{paddingTop : responsiveHeight(1), paddingRight : responsiveWidth(1),
                                paddingBottom : responsiveHeight(1), paddingLeft : responsiveWidth(1),
                                marginLeft:10, justifyContent:'center'}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between', width:responsiveWidth(70)}}>
                                    <Text style={{fontFamily: 'AvenirNext-Medium', fontWeight:'bold', color:'#34495e', fontSize:16}}>{this.props.title}</Text>
                                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'#7f8c8d', fontSize:13}}>{this.props.floatingText}</Text>
                                </View>
                                {this.renderDescription()}
                            </View>
                        </View>
                        <View style={{paddingTop : responsiveHeight(2), justifyContent : 'center', alignItems:'center'}}>
                            <Icon name={this.props.icon} style={{color:this.props.iconColor, fontSize:responsiveFontSize(4), fontWeight:'bold'}}/>
                        </View>
                    </View>
                </TouchableHighlight>
        );
    }
}
ListWithImageComponent.PropTypes = {
    icon_url: PropTypes.string,
    image_uri : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description : PropTypes.string,
    floatingText : PropTypes.string,
    iconColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onLongClick: PropTypes.func
};