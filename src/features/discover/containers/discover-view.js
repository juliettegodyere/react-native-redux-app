import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon,Thumbnail, Card, CardItem,  } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome'
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DiscoverActions } from '../redux/actions';
import { Actions } from 'react-native-router-flux';
import FeatureStyles from '../config/styles';
import CircularButton from '../../../components/circular-button';
import ScrollViewComponent from '../../../components/scroll-view'

class DiscoverListView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {}
    }

   componentDidMount(){
       //this.props.fetchUsers();
   }

    render() {
        let d = this.props.layout;
        return (
            <Container style={[Styles.container, Styles.localContainer]}>
                
                <Header style={Styles.header} hasTabs noLeft>
                    <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={Styles["header.title"]}>Explore</Title>
                    </Body>
                    <Right>
                    <Title style={Styles["header.title"]}>More</Title>
                    </Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <ScrollView scrollEventThrottle={16}>
                            <View style={{flex:1,flexDirection:'column', backgroundColor:'dddddd'}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignContent:'center',backgroundColor:'white', height:100, alignItems:'center'}}>
                                    <TouchableOpacity  onPress={() => Actions.eventsMainItem()}>
                                        <View style={{flex:1, flexDirection:'row', marginTop: 30}} >
                                            <Icon name='medkit' />
                                            <Text style={{fontSize:20, fontWeight:'500', paddingLeft:5}}>Events</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => Actions.groupItems()}>
                                        <View style={{flex:1, flexDirection:'row', marginTop: 30}} >
                                            <Icon name='cog' />
                                            <Text style={{fontSize:20, fontWeight:'500', paddingLeft:5}}>Groups</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => Actions.userList()}>
                                        <View style={{flex:1, flexDirection:'row', marginTop: 30}} >
                                            <Icon name='person' />
                                            <Text style={{fontSize:20, fontWeight:'500', paddingLeft:5}}>People</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{height:300, marginTop:5,backgroundColor:'white'}}>
                                    <View style={{flex:1}}>
                                        <List style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                                            <ListItem  style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                                                <Body>
                                                    <Text style={{fontSize:20, fontWeight:'500'}}>
                                                    Popular Events
                                                    </Text>
                                                </Body>
                                                <Right>
                                                    <Button transparent dark onPress={() => Actions.eventItem()}>
                                                        <Icons active name="angle-right" style={{ }} size={25} />
                                                    </Button>
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                    <View style={{flex:2}}>
                                        <ScrollView
                                            horizontal={true}
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <ScrollViewComponent imageUri={require
                                                ('../../../assets/img/timeline1.jpg')}
                                                 title="Ultimate Fat Loss"
                                                 subtitle="2 weeeks"
                                                 />
                                                 <ScrollViewComponent imageUri={require
                                                ('../../../assets/img/timeline2.jpg')}
                                                 title="Baby Steps to 5K"
                                                 subtitle="2 weeeks"
                                                 />
                                                 <ScrollViewComponent imageUri={require
                                                ('../../../assets/img/timeline3.jpg')}
                                                 title="20-minutes workout for you whole"
                                                 subtitle="4 weeeks"
                                                 />
                                        </ScrollView>
                                    </View>
                                </View>
                                <View style={{height:300, marginTop:5,backgroundColor:'white'}}>
                                    <View style={{flex:1}}>
                                        <List style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                                            <ListItem  style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                                                <Body>
                                                    <Text style={{fontSize:20, fontWeight:'500'}}>
                                                    Public Groups
                                                    </Text>
                                                </Body>
                                                <Right>
                                                    <Button transparent dark onPress={() => Actions.groupItems()}>
                                                        <Icons active name="angle-right" style={{ }} size={25} />
                                                    </Button>
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                        <View style={{flex:2, marginTop:-60}}>
                                            <ScrollView
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <ScrollViewComponent imageUri={require
                                                    ('../../../assets/img/timeline1.jpg')}
                                                    title="Dance Erobics"
                                                    subtitle="2 weeeks"
                                                    />
                                                    <ScrollViewComponent imageUri={require
                                                    ('../../../assets/img/timeline2.jpg')}
                                                    title="Marathon"
                                                    subtitle="2 weeeks"
                                                    />
                                                    <ScrollViewComponent imageUri={require
                                                    ('../../../assets/img/timeline3.jpg')}
                                                    title="Weight lighting"
                                                    subtitle="4 weeeks"
                                                    />
                                            </ScrollView>
                                        </View>
                                    </View>
                                    <View style={{height:300, marginTop:5,backgroundColor:'white'}}>
                                    <View style={{flex:1}}>
                                        <List style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                                            <ListItem  style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                                                <Body>
                                                    <Text style={{fontSize:20, fontWeight:'500'}}>
                                                    People You may know
                                                    </Text>
                                                </Body>
                                                <Right>
                                                    <Button transparent dark onPress={() => Actions.userList()}>
                                                        <Icons active name="angle-right" style={{ }} size={25} />
                                                    </Button>
                                                </Right>
                                            </ListItem>
                                        </List>
                                    </View>
                                        <View style={{flex:2, marginTop:-60}}>
                                            <ScrollView
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <ScrollViewComponent imageUri={require
                                                    ('../../../assets/img/timeline1.jpg')}
                                                    title="Home"
                                                    subtitle="Trainer"
                                                    />
                                                    <ScrollViewComponent imageUri={require
                                                    ('../../../assets/img/timeline2.jpg')}
                                                    title="Experience"
                                                    subtitle="Contributor"
                                                    />
                                                    <ScrollViewComponent imageUri={require
                                                    ('../../../assets/img/timeline3.jpg')}
                                                    title="Resturant"
                                                    subtitle="Trainer"
                                                    />
                                            </ScrollView>
                                        </View>
                                    </View>
                            </View>
                    </ScrollView>
                </Content >
            </Container >
        );
    }
}

DiscoverListView.propTypes = {
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
export default connect(mapStateToProps)(DiscoverListView)

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
