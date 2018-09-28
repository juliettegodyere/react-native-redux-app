import React, { Component } from 'react';
import { View, Text,StyleSheet,StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Textarea, Form , Icon,  Footer, FooterTab, Button, Fab, Item, Input,Picker} from 'native-base';
import { Actions } from 'react-native-router-flux';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import FeatureStyles from '../config/styles';

class NewGroup extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            active:'true',
            selected2: undefined
        };
    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
  render() {
    return (
      <Container style={[Styles.container]}>
        <Header style={Styles.header} >
            <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
            <Left>
                <Icon name='close' style={Styles.arrowBack} onPress={() => Actions.pop()}/>
            </Left>
            <Body>
                 <Text style={Styles["header.title"]}>New Group</Text>
                 <Text style={Styles["subtext"]} note>Add Subject</Text>
            </Body>
        </Header>
        <Content padder contentContainerStyle={{ width: '100%', justifyContent: 'flex-start' }}>
            <View>
                <View>
                <Item picker>
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: undefined }}
                        placeholder="Select your group type"
                        placeholderStyle={{ color: "#c44569", fontSize:20, fontWeight:'bold' }}
                        placeholderIconColor="#c44569"
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                    >
                        <Picker.Item label="Open group" value="key0" />
                        <Picker.Item label="Closed group" value="key1" />
                    </Picker>
                    </Item>
                </View>
                <View style={{marginTop:10}}>
                <List style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                    <ListItem avatar style={{borderBottomWidth:0, borderBottomColor:'transparent'}}>
                        <Left>
                            <Thumbnail source={{uri:'http://medic.ua/wp-content/uploads/2017/04/plank_620x350_51478849407-620x275.jpg'}} /> 
                        </Left>
                        <Body>
                            <Item success>
                                <Input placeholder='Type group subject here...'/>
                                <Icon name='checkmark-circle' />
                            </Item>
                        </Body>
                    </ListItem> 
                </List>
                </View>
                <View>
                    <Text style={{fontSize:16, paddingHorizontal:20, marginTop:10}}>Provide a group subject and an optional group icon</Text>
                </View>
            </View>
        </Content>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#c44569' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="arrow-forward" />
          </Fab>
      </Container>
    );
  }
}

function mapStateToProps(state) {
    return {
        layout: state.layout,
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(TimelineActions, dispatch)
// }
export default connect(mapStateToProps)(NewGroup)

const Styles = StyleSheet.create({
    ...FeatureStyles,
    add_button_panel: {
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        //backgroundColor: '#F2F6fE'//FeatureStyles.btnPrimary.backgroundColor
    },
    add_button: {
        width: 100, height: 100, 
        elevation:10,
        borderWidth: 1,
        fontSize: 60,
        //borderColor: FeatureStyles.link.color,
        color: FeatureStyles.link.color,
        backgroundColor: '#FFF',//'#F2F6fE'
    }
});