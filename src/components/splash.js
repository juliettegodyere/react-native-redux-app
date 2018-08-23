import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../utils/layout';
import GlobalStyles from '../config/styles';
import { AsyncUtils } from '../utils/async';

export default class SplashView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        if (this.props.onTimeout) {
            AsyncUtils.throttle(this.props.onTimeout, this.props.delay, this, false)();
        }
    }
    render() {
        let d = this.props.layout;
        return <Container style={[Styles.container]}>
            <View style={[Styles.inner_panel]}>
                <Image resizeMode="contain" source={this.props.logo_url} style={{ width: (d.orientation == 'portrait' ? rw(60, d) : rw(30, d)), height: 100 }} />
            </View>
        </Container>
    }
}

SplashView.propTypes = {
    background_url: PropTypes.string,
    logo_url: PropTypes.number.isRequired,
    delay: PropTypes.number,
    onTimeout: PropTypes.func
};

const Styles = StyleSheet.create({
    ...GlobalStyles,
    inner_panel: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        height: '100%', // 50% of screen height
        width: '100%', // 50% of screen width
        alignItems: 'center',
    }
})