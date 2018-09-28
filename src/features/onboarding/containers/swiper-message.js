import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Content, Left, Right, Body, Title, List, ListItem, Button, Icon,Thumbnail, Card, CardItem, Item, Input } from 'native-base';
import Swiper from 'react-native-swiper';
import Icons from 'react-native-vector-icons/FontAwesome'
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DiscoverActions } from '../redux/actions';
import { Actions } from 'react-native-router-flux';
import FeatureStyles from '../config/styles';
import CircularButton from '../../../components/circular-button';
import ScrollViewComponent from '../../../components/scroll-view'
const {height, width} = Dimensions.get('window');


class onBoardingScreenView extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            slides:[{
                text:'Testing'
            },
            {
                text:'Testing2'
            }
        ]
        };
        
      
    }

    componentWillMount() {
       
    }  

    swipeRender(){
        return(
            <View>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
                
            </View>
        )
    }

    render() {
        let d = this.props.layout;
        const slides = [{
            source: require('../../../assets/img/slide1.jpg'),
            text: 'Hold the keys of your spendings',
          }, {
            source: require('../../../assets/img/slide2.jpg'),
            text: 'Focus on your dreams, not cost-cutting',
          }, {
            source: require('../../../assets/img/slide1.jpg'),
            text: 'Give your finance a prosperous life',
          }];
        return (
            <Container style={[Styles.container]}>
                {/* <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} /> */}
                <Swiper 
                loop={false}
                containerStyle={{width:'100%'}}
                style={Styles.wrapper} 
                showsButtons={false} 
                autoplayTimeout={3} 
                autoplay={false} 
                showsPagination={true}
                removeClippedSubviews={true}>
                    <View style={[Styles.slide1,Styles.imageView]}>
                            {/* <Image
                                source={require('../../../assets/img/slide1.jpg')} 
                                resizeMode="contain"
                                style={{width:null, height:null, flex:1, resizeMode:'contain'}}
                            /> */}
                        <Text style={Styles.text}>I will make sweat my best accessory. I will run harder than my mascara</Text>
                    </View>
                    <View style={[Styles.slide2]}>
                        <View style={{marginTop:80, width:300}}>
                            <Text style={Styles.getStartedText}>Let's get started</Text>
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{fontSize:18,}}>
                                    Sign up or log in to see what's happening near you
                            </Text>
                        </View>
                        <View style={{marginTop:60}}>

                                <Text style={{fontSize:18, }}>Email</Text>
                                <Item success syle={{}}>
                                    <Input placeholder='Enter email address' placeholderTextColor="black" style={{borderBottomColor:'black'}} />
                                    {/* <Icon name='checkmark-circle' /> */}
                                </Item>
                                <Button disabled block style={{marginTop:20}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Get Started</Text>
                                </Button>
                        </View>
                        <View style={{marginTop:30}}>
                            {/* <Button> */}
                                <Text style={{fontSize:18, color:'blue', textAlign:'center'}} onPress={() => Actions.timelineList()}>Skip for now</Text>
                            {/* </Button> */}
                        </View>
                        </View>
                </Swiper>
            </Container >
        );
    }
}

onBoardingScreenView.propTypes = {
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
export default connect(mapStateToProps)(onBoardingScreenView)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    wrapper: {
        width:'100%'
    },
    slide1: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
     //backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex:1,
      justifyContent: 'flex-start',
    //   alignItems: 'center',
      //backgroundColor: '#97CAE5',
      paddingHorizontal:20
    },
    text: {
      color: '#000',
      fontSize: 50,
      fontWeight: '700',
      textAlign:'center',
      color:'#C44569'
    //   tintColor:'red',

    }, 
    imageView:{
        //width:width, 
       // height:height,
    },
    getStartedText:{
        fontSize:50,
        fontWeight:'700',
        //marginTop:50
        color:'#C44569'

    }
   
});
