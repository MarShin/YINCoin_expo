import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

const IconButton = ({ iconName, text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('./images/${iconName}.png')}
      />
      {/* <Icon name="cycle" size={35} /> */}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

IconButton.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default IconButton;
