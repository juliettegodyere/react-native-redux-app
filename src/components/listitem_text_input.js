import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ListItem, Body, Input } from 'native-base';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import GlobalStyles from '../config/styles';

export default class ListItemTextInput extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            label: this.props.label,
            value: this.props.value
        }
    }

    valueChanged(value) {
        this.setState({ value });
        if (this.props.onValueChanged) {
            this.props.onValueChanged(value);
        }
    }
    render() {
        return <ListItem noIndent>
            <Body style={{ height: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={Styles.li_label}>{this.state.label}</Text>
                <Input style={Styles.li_value} keyboardType={this.props.keyboardType} maxLength={this.props.maxLength} onChangeText={this.valueChanged} placeholder={this.props.placeholder} />
            </Body>
        </ListItem>
    }
}

ListItemTextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    onValueChanged: PropTypes.func
};

const Styles = StyleSheet.create({
    ...GlobalStyles,
    li_label: {
        color: '#bfbfbf',
        paddingRight: 10
    },
    li_value: {
        borderLeftWidth: 1,
        borderLeftColor: '#dfdfdf',
        borderStyle: 'solid',
        paddingLeft: 10
    }
})