import React, { Component } from 'react';
import { View } from 'react-native';

import { IconButton } from '../Button';

import styles from './styles';

class TaskBanner extends Component {
  handlePrices = () => {
    console.log('press prices button');
    this.props.navigation.navigate('Prices');
  };

  handleSendMoney = () => {
    console.log('press send money');
  };

  handleReceiveMoney = () => {
    console.log('press receive money');
  };

  handleConvert = () => {
    console.log('press convert coin');
  };

  render() {
    return (
      <View style={styles.container}>
        <IconButton iconName="prices" text="價格" onPress={this.handlePrices} />
        <IconButton iconName="send_money" text="付錢" onPress={this.handleSendMoney} />
        <IconButton iconName="receive_money" text="收錢" onPress={this.handleReceiveMoney} />
        <IconButton iconName="convert" text="買幣" onPress={this.handleConvert} />
      </View>
    );
  }
}

export default TaskBanner;
