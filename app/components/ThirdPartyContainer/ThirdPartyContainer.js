import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { List, Card, Button } from 'react-native-elements';
import styles from './styles';

import { IconButton } from '../Button';

class ThirdPartyContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleTransport = () => {
    console.log('press transport');
  };

  render() {
    const transportImg = require('./images/transport.png');
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Powered by Third Party</Text>
        <View style={styles.iconContainer}>
          <IconButton
            iconName="transport"
            text="交通"
            onPress={this.handleTransport}
            iconImage={styles.iconImage}
            iconText={styles.iconText}
            imageSource={transportImg}
          />
        </View>
      </View>
    );
  }
}

export default ThirdPartyContainer;
