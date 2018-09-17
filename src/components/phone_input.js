import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { List, ListItem, Left, Right, Icon } from 'native-base';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import ListItemPhoneInput from './listitem_text_input';

import intl_dialing_codes from '../config/datasets/intl_dialing_codes.json';
import GlobalStyles from '../config/styles';

export default class PhoneInput extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            intl_dialing_code: this.props.intl_dialing_code || '',
            phone_number: this.props.phone_number || ''
        }
    }

    valueChanged(value) {
        this.setState((prevState, props) => {
            if (this.props.onValueChanged) {
                this.props.onValueChanged(
                    (value.intl_dialing_code || prevState.intl_dialing_code) +
                    (value.phone_number || this.state.phone_number));
            }
            return value;
        });
    }

    render() {
        return <List>
            <ListItem noIndent >
                <Left><Text style={[Styles.p, Styles.link]}>{intl_dialing_codes[this.state.intl_dialing_code]}</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
            <ListItemPhoneInput
                keyboardType="phone-pad"
                label={this.state.intl_dialing_code}
                onValueChanged={(phone_number) => this.valueChanged({ phone_number })}
                placeholder={this.props.placeholder} />
        </List>
    }
}

PhoneInput.propTypes = {
    intl_dialing_code: PropTypes.string,
    phone_number: PropTypes.number,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    onValueChanged: PropTypes.func
};

const Styles = StyleSheet.create({
    ...GlobalStyles,
})