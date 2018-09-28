import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon,Thumbnail, Card, CardItem, Fab } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome'
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DiscoverActions } from '../redux/actions';
import { Actions } from 'react-native-router-flux';
import FeatureStyles from '../config/styles';
import EventsItems from '../../../components/events-items'
import FabComponent from '../../../components/fab'

const {height, width} = Dimensions.get('window');

class EventsMainView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            active:'true'
        }
    }

   componentDidMount(){
       //this.props.fetchUsers();
   }

    render() {
        let d = this.props.layout;
        return (
            <Container style={[Styles.container, Styles.localContainer]}>
                
                <Header style={Styles.header} hasTabs>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={Styles["header.title"]}>Events</Title>
                    </Body>
                    <Right>
                    <Icon name='color-filter' color='white' style={{marginRight:20, color:'white'}} onPress={this._eventButton}/>
                    <Icon name='md-more' size={30} color='white' style={{color:'white'}}/>
                    {/* <Icon name='menu' /> */}
                    </Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{backgroundColor:'white'}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight:'500', paddingHorizontal:20, marginTop:40,}}>
                                        What's New
                                    </Text>
                                    <Button transparent dark style={{paddingHorizontal:20, marginTop:40}}>
                                        <Icons active name="angle-right" style={{ }} size={25} />
                                    </Button>
                                </View>
                                <View style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                </View>
                            </View>
                            <View style={{backgroundColor:'white', marginTop:5}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight:'500', paddingHorizontal:20, marginTop:40,}}>
                                        Weight loss
                                    </Text>
                                    <Button transparent dark style={{paddingHorizontal:20, marginTop:40}}>
                                        <Icons active name="angle-right" style={{ }} size={25} />
                                    </Button>
                                </View>
                                <View style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                </View>
                            </View>
                            <View style={{backgroundColor:'white', marginTop:5}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                                    <Text style={{fontSize:20, fontWeight:'500', paddingHorizontal:20, marginTop:40,}}>
                                        Build Muscle
                                    </Text>
                                    <Button transparent dark style={{paddingHorizontal:20, marginTop:40}}>
                                        <Icons active name="angle-right" style={{ }} size={25} />
                                    </Button>
                                </View>
                                <View style={{paddingHorizontal:20, marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                    <EventsItems width={width}/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Content >
               <FabComponent/>
            </Container >
        );
    }
}

EventsMainView.propTypes = {
    // users:PropTypes.array,
    // fetchUsers:PropTypes.func,
    // loading:PropTypes.bool,
    // error:PropTypes.string
}
function mapStateToProps(state) {
    return { 

        layout: state.layout,
    }
}
//var fetchUsers = DiscoverActions.fetchUsers;
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(DiscoverActions, dispatch)
// }
export default connect(mapStateToProps)(EventsMainView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    localContainer:{
        backgroundColor:'#DFE6E9'
    },
    row1:{
        height: 100,
        backgroundColor: '#ffffff', 
        //marginTop:5
    },
    row2:{
        //height: 300,
        backgroundColor: '#ffffff', 
        marginTop:5
    },
    row3:{
       // height: 300,
        backgroundColor: '#ffffff', 
        marginTop:5
    }
   
});
