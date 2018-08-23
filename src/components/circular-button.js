import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button, Icon, Badge, Card, } from 'native-base';

import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { t, i18n, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils';
import GlobalStyles from '../config/styles';
import { splitNumber, currentLocale } from '../utils/i18n';

export default class CircularButton extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    render() {
        let d = this.props.layout;
        let content = this.props.buttonText
            ? <Text style={Styles.h3}>{this.props.buttonText}</Text>
            : <Icon name={this.props.buttonIcon} style={{ color: '#4B77BE', fontSize: 75 }} />
        return <View>
            <Card style={Styles.circular_button_panel}>
                <Button onPress={() => { console.log('xx') }} rounded bordered style={Styles.circular_button}>
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

const Styles = StyleSheet.create({
    ...GlobalStyles,
    circular_button_panel: { alignSelf: 'center', borderColor: 'transparent', elevation: 0, width: 100, height: 100, marginTop: 20, marginBottom: 20, borderRadius: 50, shadowRadius: 10 },
    circular_button: { justifyContent: 'center', borderColor: '#dfdfdf', width: 100, height: 100, borderRadius: 50 }
});


