import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { AuthPinActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
import CircularButton from '../../../components/circular-button';

class PinView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }
    componentWillMount() {
        if (this.props.onboarding.walktrough_index >= 3) {
            //Actions.push('invitation');
        }
    }
    onNext() {
        this.props.setIntroPinIndex(3);
        Actions.push('invitation');
    }

    render() {
        let d = this.props.layout;
        let items = [1,2,3,4,5,6,7,8,9,'help',9,'backspace'];

        return (
            <Container style={[Styles.container]}>
                
                <Header style={Styles.header} noLeft>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left/>
                    <Body>
                        <Title style={Styles["header.title"]}>Login</Title>
                    </Body>

                    <Right><Button large transparent iconRight><Icon name='ios-settings' /></Button></Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >

                    <View style={{ flexDirection: 'column', justifyContent: 'center', padding: rh(2.5, d) }}>
                        
                        <View style={{alignItems:'center', paddingTop: rh(5, d), paddingBottom: rh(2.5, d)}}>
                            <Text style={[Styles.h5, {textAlign: 'center'}]}>Enter your passcode to continue</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: rh(2.5,d)}}>
                            <View style={[Styles.pin_stud_panel]}>
                                <CircularButton buttonText="" style={Styles.pin_stud}/>
                            </View>
                            <View style={[Styles.pin_stud_panel]}>
                                <CircularButton buttonText="" style={Styles.pin_stud}/>
                            </View>
                            <View style={[Styles.pin_stud_panel]}>
                                <CircularButton buttonText="" style={Styles.pin_stud}/>
                            </View>
                            <View style={[Styles.pin_stud_panel]}>
                                <CircularButton buttonText="" style={Styles.pin_stud}/>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="1" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="2" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="3" style={Styles.pin_button}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="4" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="5" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="6" style={Styles.pin_button}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="7" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="8" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="9" style={Styles.pin_button}/>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={[Styles.pin_button_panel, {backgroundColor: 'transparent'}]}/>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonText="0" style={Styles.pin_button}/>
                            </View>
                            <View style={[Styles.pin_button_panel]}>
                                <CircularButton buttonIcon="ios-backspace" style={Styles.pin_button}/>
                            </View>
                        </View>

                    </View>
                </Content >
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return { onboarding: state.onboarding, layout: state.layout }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AuthPinActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PinView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    pin_button_panel: {
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        margin: rw(2.5),
        backgroundColor: '#F2F6fE'//FeatureStyles.btnPrimary.backgroundColor
    },
    pin_button: {
        width: 70, height: 70, 
        elevation:0,
        borderWidth: 1,
        fontSize: FeatureStyles.h3.fontSize,
        borderColor: FeatureStyles.link.color,
        color: FeatureStyles.link.color,
        backgroundColor: '#FFF',//'#F2F6fE'
    },
    pin_stud_panel: {
        width: 16, 
        height: 16, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: rw(2.5),
        //backgroundColor: 'red'
    },
    pin_stud: {
        width: 16, 
        height: 16,
        elevation: 0, 
        borderWidth: 1,
        borderRadius: 8,
        borderColor: FeatureStyles.link.color,
        backgroundColor: '#FFF'
    }
});
