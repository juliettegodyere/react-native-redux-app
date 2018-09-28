import React, { Component } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Thumbnail, Card, Tabs, Tab, Separator, TabHeading, CardItem, } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TimelineActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
//import ProductCard from '../../../components/product-card';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
//import { i18n } from '../../../utils/i18n';

class TimelineDetailView extends Component {
   
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }

    onNext() {
        this.props.activateUser(this.state);
        // /Actions.push('invitation');
    }

    renderTabHeading(label) {
        return <TabHeading style={Styles.tabs}><Text style={Styles.tabs}>{label}</Text></TabHeading>
    }
    _onPressButton(){
        Actions.timelineList();
    }
    renderProgress() {
        return  <AnimatedCircularProgress
                    size={40}
                    width={2}
                    fill={100}
                    duration={60000}
                    rotation={0}
                    tintColor={Styles.link.color}
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#dfdfdf"
                >
                    {
                        (fill) => (
                            <Text style={[Styles.small, Styles.no_padding]}>{((100 - fill) * 0.6).toFixed(0)}</Text>
                        )
                    }</AnimatedCircularProgress>
    }

    render() {
        let d = this.props.layout;
        //items = emptyItems;
        return (
            <Container style={[Styles.container]}>
                <Header style={Styles.header} >
                <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left><Icon name='arrow-back' style={Styles.arrowBack} onPress={this._onPressButton}/></Left>
                    <Right>
                        <Button transparent>
                            <Icon name='share' />
                        </Button>
                        <Button transparent>
                            <Icon name='heart' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>

                <Content contentContainerStyle={{ width: '100%', justifyContent: 'flex-start' }} >
                 <View style={{flex:1}}>
                     <View style={{backgroundColor:'white', width:'100%'}}>
                        <Card style={{marginLeft:0,marginTop:0, marginRight:0, width:'100%', justifyContent:'center'}}>
                            <CardItem cardBody>
                                <Image source={this.props.image_url} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        </Card>
                     </View>
                 </View>
                </Content >
            </Container >
        );
    }
}

function mapStateToProps(state) {
    return {layout: state.layout }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(TimelineActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TimelineDetailView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    no_padding: { paddingBottom: 0, padding: 0 }
});
