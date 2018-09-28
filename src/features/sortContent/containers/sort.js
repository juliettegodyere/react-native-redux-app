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

const {height, width} = Dimensions.get('window');

class SortView extends Component {
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
                        <Icon name='close' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={Styles["header.title"]}>Events</Title>
                    </Body>
                    <Right>
                    <Icon name='save' size={23} color='white' style={{marginRight:20}}/>
                    
                    </Right>
                </Header>
                <Content contentContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }} >
                    <View>
                        <Text>Filter by Category</Text>
                    </View>   
                </Content >
            </Container >
        );
    }
}

SortView.propTypes = {
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
export default connect(mapStateToProps)(SortView)

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
