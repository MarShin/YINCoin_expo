import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';

class IconButton extends Component {
  handleButtonPress = () => {
    console.log('press IconButton button~');
  };

  render() {
    let filename = null;
    switch (this.props.iconName) {
      default:
        filename = require('./images/icon.png');
        break;
      case 'balance':
        filename = require('./images/balance.png');
        break;
      case 'prices':
        filename = require('./images/prices.png');
        break;
      case 'receive_money':
        filename = require('./images/receive_money.png');
        break;
      case 'send_money':
        filename = require('./images/send_money.png');
        break;
    }

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Image resizeMode="contain" style={styles.icon} source={filename} />
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default IconButton;
