import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, Icon, Badge, Card, } from 'native-base';

import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { t, i18n, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils';
import GlobalStyles from '../config/styles';
//import { splitNumber, currentLocale } from '../utils/i18n';

export default class CircularButton extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }
   
    render() {
        let d = this.props.layout;
        
        let buttonStyle = {width: 100, height: 100, fontSize: Styles.h3.fontSize, ...this.props.style};
        let width = buttonStyle.width || 100;
        let height = buttonStyle.height|| 100;
        let marginTop = width / 5;
        let marginBottom = width / 5;
        let borderRadius = width / 2;
        let shadowRadius = width / 10;

        let content = this.props.buttonText
        ? <Text style={[Styles.h3, {color: buttonStyle.color, paddingBottom:0}]}>{this.props.buttonText}</Text>
        : <Icon name={this.props.buttonIcon} style={{color: buttonStyle.color, fontSize: buttonStyle.fontSize }} />

        return <View>
            <Card style={[{ 
                    alignSelf: 'center', justifyContent: 'center', borderColor: 'transparent', 
                    width, height, elevation: buttonStyle.elevation,
                    marginTop, marginBottom, borderRadius, shadowRadius}]}>
                <Button style={[{ 
                    justifyContent: 'center', borderColor: '#dfdfdf',
                    width, height, borderRadius }, buttonStyle, {elevation:0}]}
                    onPress={() => { console.log('xx') }} rounded>
                    {content}
                </Button>
            </Card>
        </View>

    }
}

CircularButton.propTypes = {
    buttonText: PropTypes.string,
    buttonIcon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

const Styles = GlobalStyles
