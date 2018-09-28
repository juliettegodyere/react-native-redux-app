import React, { Component } from 'react';
import { View, Text,StyleSheet,StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Textarea, Form , Icon,  Footer, FooterTab, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import FeatureStyles from '../config/styles';

class AddFeeds extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {};
    }
  render() {
    return (
      <Container style={[Styles.container]}>
        <Header style={Styles.header} >
            <StatusBar barStyle="dark-content" backgroundColor={Styles.header.backgroundColor} />
            <Left>
                <Icon name='close' style={Styles.arrowBack} onPress={() => Actions.pop()}/>
            </Left>
            <Right>
                <Text style={{fontSize:18, color:'white', fontWeight:'500'}}>Post</Text>
            </Right>
        </Header>
        <Content padder contentContainerStyle={{ width: '100%', justifyContent: 'flex-start' }}>
          <View>
              <View>
                <Form style={{elevation:0}}>
                    <Textarea rowSpan={10} bordered placeholder="What's happening?" />
                </Form>
              </View>
          </View>
        </Content>
        <Footer style={{backgroundColor:'white'}}>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button >
              <Text >Post</Text>
            </Button>
          </FooterTab>
        </Footer>
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
export default connect(mapStateToProps)(AddFeeds)

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