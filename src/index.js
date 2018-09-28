import React, { Component } from 'react';
import { Text, AppRegistry, NativeModules, Linking, Platform, StyleSheet, View, Dimensions } from 'react-native';
import { Root } from "native-base";
import { Scene, Router, Tabs, Modal } from 'react-native-router-flux';
import autoBind from 'react-autobind';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { LayoutActions } from './redux/actions';
import { StoreUtils, createLayoutObject, applyTranslations } from './utils';
import Config from './config';
import GlobalStyles from './config/styles';
import SplashView from './components/splash';
import FooterTabView from './components/footer-tab';

const { store, persistor } = StoreUtils.createStore(Config.redux);

//applyTranslations(Config.i18n.translations);

export default class App extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            layout: createLayoutObject(Dimensions.get('window'))
        };
    }
    componentDidMount() {
        this.subscribe();
    }

    async subscribe() {

        store.subscribe(async () => {
            console.debug(JSON.stringify(store.getState()));
        });
        console.info('Subscribed');
        // Subscribe to the socket-cluster feeds here
    };

    onLayoutChanged(event) {
        store.dispatch(LayoutActions.updateLayout(event.nativeEvent.layout));
    }

    renderLoading() {
        return <SplashView
            layout={this.state.layout}
            logo_url={require('./assets/img/logo.png')}
            hideNavBar={true} title="" panHandlers={null} />
    }

    renderTabbedScenes(scene, key) {
        //console.log(JSON.stringify(this.state + "Just curious"));
        return <Scene tabs key={key} hideTabBar={false} tabBarComponent={FooterTabView} tabBarPosition="bottom" onTabOnPress = {() => alert(key)}>
            {scene.map(subScene => subScene.render(this.state))}
        </Scene>
    }

    render() {

        return <Provider store={store} >
            <PersistGate loading={this.renderLoading()} persistor={persistor}>
                <Root onLayout={this.onLayoutChanged}>
                    <Router>
                        <Modal>
                            <Scene key="root" hideNavBar={true} title="" panHandlers={null} >
                                {Config.scenes.map((scene, index) => {
                                    return Array.isArray(scene) ? this.renderTabbedScenes(scene, "tab-scene-" + index) : scene.render(this.state)
                                })}
                            </Scene>
                        </Modal>
                    </Router>
                </Root>
            </PersistGate>
        </Provider>
    }
}

AppRegistry.registerComponent('micropay-go', () => App);
