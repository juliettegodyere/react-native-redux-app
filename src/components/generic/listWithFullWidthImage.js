import React, { Component } from 'react';
import { Text, StyleSheet, ListView, View ,ImageBackground, ScrollView, TouchableHighlight} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import PropTypes from 'prop-types';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class ListWithFullWidthImageBackgroundComponent extends Component{
    constructor (props) {
        super(props);
    }
    itemClicked(){
        this.props.onClick(this.props);
    }
    renderDescription(){
        if (this.props.description && this.props.description.length){
            return (
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontFamily: 'AvenirNext-Medium', color:'white', fontSize:14}}>{this.props.description}</Text>
                </View>
            );
        } else {
            return null;
        }
    }
    render(){
        return (
            <View style={{marginTop:10}}>
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
                    underlayColor="#ecf0f1"
                >
                    <ImageBackground
                        style={{width:responsiveWidth(100)}}
                        source={this.props.image_uri}>
                        <View style={{width:responsiveWidth(100), height:responsiveHeight(18),
                         backgroundColor:'black', opacity:0.6}}>
                            <View style={{flexDirection:'row', padding:10,
                        paddingTop:responsiveHeight(2), paddingBottom:responsiveHeight(2),
                        justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                    <View
                                        style={{paddingTop : responsiveHeight(1), paddingRight : responsiveWidth(1),
                                paddingBottom : responsiveHeight(1), paddingLeft : responsiveWidth(1),
                                marginLeft:10, justifyContent:'center'}}>
                                        <View style={{flexDirection:'row', justifyContent:'space-between', width:responsiveWidth(70)}}>
                                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'white', fontSize:16, fontWeight:'bold'}}>{this.props.title}</Text>
                                            <Text style={{fontFamily: 'AvenirNext-Medium', color:'white', fontSize:14}}>{this.props.floatingText}</Text>
                                        </View>
                                        {this.renderDescription()}
                                    </View>
                                </View>
                                <View style={{justifyContent : 'center'}}>

                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        );
    }
}
ListWithFullWidthImageBackgroundComponent.PropTypes = {
    icon_url: PropTypes.string,
    image_uri : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description : PropTypes.string,
    floatingText : PropTypes.string,
    iconColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    onLongClick: PropTypes.func
};