import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
// import { Icon } from 'react-native-elements';

import styles from './styles';

// const IconButton = ({ iconName, text, onPress }) => (

class IconButton extends Component {
  constructor(props) {
    super(props);
  }

  handleButtonPress = () => {
    console.log('press icon button~');
  };

  render() {
    let filename = null;
    switch (this.props.iconName) {
      default:
        filename = require('./images/icon.png');
        break;

      case 'convert':
        filename = require('./images/convert.png');
        break;

      case 'price':
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
      <TouchableOpacity style={styles.container} onPress={this.handleButtonPress}>
        <View style={styles.wrapper}>
          <Image resizeMode="contain" style={styles.icon} source={filename} />
          {/* <Icon name="cycle" size={35} /> */}
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

IconButton.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  // onPress: PropTypes.func,
};

export default IconButton;
