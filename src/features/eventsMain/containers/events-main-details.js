import React, { Component } from 'react';
import { View, Text, Image, StatusBar, StyleSheet , Dimensions, ScrollView} from 'react-native';

import { Container, Header, Content, Left, Right, Body, List, ListItem, Button, Title, Icon, Badge, Thumbnail, Card, Tabs, Tab, Separator, TabHeading, CardItem, } from 'native-base';

import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { EventsMainDetailsActions } from '../redux/actions';

import { Actions } from 'react-native-router-flux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
//import ProductCard from '../../../components/product-card';

import { t, responsiveHeight as rh, responsiveWidth as rw, responsiveFontSize as rf } from '../../../utils';
import FeatureStyles from '../config/styles';
//import { i18n } from '../../../utils/i18n';

const {height, width} = Dimensions.get('window');


class EventsMainDetails extends Component {
   
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
                    <Left>
                        <Icon name='arrow-back' style={Styles.arrowBack} onPress={this._onPressButton}/>
                    </Left>
                    <Body>
                        <Text style={Styles['header.title']}>Event Details</Text>
                    </Body>
                    <Right/>
                </Header>
                  <Content contentContainerStyle={{width: '100%', justifyContent: 'flex-start',backgroundColor:'#dddddd'}} >
                    <View style={{flex:1}}>
                        <View style={{backgroundColor:'white', width:'100%'}}>
                           <Card style={{marginLeft:0,marginTop:0, marginRight:0, width:'100%', justifyContent:'center'}}>
                                <CardItem cardBody>
                                    <Image source={require('../../../assets/img/timeline1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                                </CardItem>
                           </Card>
                            <Text style={{fontSize:20, fontWeight:'500', paddingHorizontal:20, marginTop: 20, marginBottom:20}}>
                                Ultimate Fat Loss
                                </Text>
                                <Text style={{fontSize:16, paddingHorizontal:20, marginTop:10}}>
                                Card Showcase is further customization of Card Image. It uses several different items.Begins with the Card List component, which is similar to our List Avatar...
                                    <Text style={{fontSize:16, fontWeight:'500'}}>View More</Text>
                            </Text>
                            <Text style={{fontSize:18, fontWeight:'500', paddingHorizontal:20, marginTop: 30}}>
                                Thursday, October 18
                            </Text>
                            <Text style={{fontSize:16, paddingHorizontal:20, marginTop:10}}>
                                10:00AM - 3:00PM GMT +01:00
                            </Text>
                            <Text style={{fontSize:18, fontWeight:'500', paddingHorizontal:20, marginTop: 20}}>
                                National Stadium 
                            </Text>
                            <Text style={{fontSize:16, paddingHorizontal:20, marginTop:10}}>
                                Surulere Lagos
                            </Text>
                            <Text style={{fontSize:18, fontWeight:'500', paddingHorizontal:20, marginTop: 20}}>
                                Free
                            </Text>
                            <Text style={{fontSize:16, paddingHorizontal:20, marginTop:10, marginBottom:20}}>
                                On demand
                            </Text>
                        </View> 
                        <View style={{flex:1, marginTop:5, backgroundColor:'white'}}>
                            <Text style={{fontSize:20, fontWeight:'500', paddingHorizontal:20, marginTop:10, marginBottom:10}}>
                                Trainer
                            </Text>
                            <View>
                               <List>
                                   <ListItem>
                                       <Body>
                                            <Text style={{fontSize:18, marginBottom:10}}>Kumar Pratik</Text>
                                            <Text note>Doing what you like will always keep you happy . .</Text>
                                       </Body>
                                       <Right>
                                        <Button rounded transparent bordered>
                                            <Text style={{fontSize:18, fontWeight:'bold', padding:10}}>Follow</Text>
                                        </Button>
                                       </Right>
                                   </ListItem>
                               </List>
                            </View>

                        </View>
                        <View style={{flex:1, marginTop:5, backgroundColor:'white'}}>
                            <Text style={{fontSize:20, fontWeight:'500', paddingHorizontal:20, marginTop:10, marginBottom:10}}>
                                Organizer
                            </Text>
                            <View >
                                <List>
                                    <ListItem>
                                        <Body>
                                            <Text style={{fontSize:18, marginBottom:10}}>Kumar Pratik</Text>
                                            <Text note>Doing what you like will always keep you happy . .</Text>
                                        </Body>
                                        <Right>
                                            <Button rounded transparent bordered>
                                                <Text style={{fontSize:18, fontWeight:'bold', padding:10}}>Follow</Text>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                </List>
                                {/* <Text style={{fontSize:18, paddingHorizontal:20, marginTop:10}}>
                                    Ben Brush
                                </Text>
                                <Button rounded transparent bordered style={{marginLeft:200}}>
                                    <Text style={{fontSize:18, fontWeight:'bold'}}>Follow</Text>
                                </Button> */}
                            </View>

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
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(EventsMainDetailsActions, dispatch)
// }
export default connect(mapStateToProps)(EventsMainDetails)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    no_padding: { paddingBottom: 0, padding: 0 }
});
