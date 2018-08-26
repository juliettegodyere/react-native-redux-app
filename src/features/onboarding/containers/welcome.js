import React, { Component } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';

import { Container, Button } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { OnboardingActions } from '../redux/actions';

import Hyperlink from 'react-native-hyperlink';

import { responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils/layout';
import { t } from '../../../utils/i18n';
import FeatureStyles from '../config/styles';

class WelcomeView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }
    componentWillMount() {
        if (this.props.onboarding.legal_acceptance_date) {
            Actions.replace('walkthrough');
        }
    }
    onClickAgree() {
        this.props.acceptLegalAgreements();
        Actions.push('walkthrough');
    }
    getLinkText(url) {
        return url.match(/terms/) ? t('onboarding.welcome.terms') : t('onboarding.welcome.privacy_policy');
    }
    render() {
        let d = this.props.layout;
        return (
            <Container style={[Styles.container]}>
                <StatusBar barStyle="dark-content" backgroundColor={Styles.inner_panel.backgroundColor} />
                <View>
                    <View style={[Styles.inner_panel]}>
                        <Image resizeMode="contain" source={require('../../../assets/img/logo.png')} style={{ width: (d.orientation == 'portrait' ? rw(60, d) : rw(30, d)), height: 75 }} />
                        <Text style={Styles.h4}>{t('onboarding.welcome.motto')}</Text>
                    </View>
                    <View style={[Styles.inner_panel, Styles.welcome_panel, {flexDirection: 'column', justifyContent: 'space-between'}]}>
                        <View >
                            <Text style={[Styles.h3, Styles.welcome_text]}>{t('onboarding.welcome.title')}</Text>
                            <View style={{ padding: rw(2, d), width: '80%' }}>
                                <Hyperlink linkStyle={[Styles.link]} linkText={this.getLinkText}>
                                    <Text style={[Styles.small, Styles.welcome_text]}>
                                        {t('onboarding.welcome.summary', { terms: 'https://usemicropay.com/legal/terms', privacy_policy: 'https://usemicropay.com/legal/privacy' })}
                                    </Text>
                                </Hyperlink>
                            </View>
                        </View>
                        <View style={{width: '100%'}}>
                            <Button large transparent full onPress={this.onClickAgree} style={[Styles.btnPrimary]}>
                                <Text style={[Styles.btn, Styles.btnLarge, Styles.btnPrimaryText, Styles.welcome_text, { padding: rw(2, d) }]}>
                                    {t('onboarding.welcome.next')}
                                </Text>
                            </Button>
                        </View>
                    </View>
                </View >
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return { onboarding: state.onboarding, layout: state.layout }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(OnboardingActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    inner_panel: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        height: '50%', // 50% of screen height
        width: '100%', // 50% of screen width
        alignItems: 'center',
    },
    welcome_panel: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    welcome_text: { textAlign: 'center' },
    welcome_button: { alignSelf: 'center', justifyContent: 'center' },
});
