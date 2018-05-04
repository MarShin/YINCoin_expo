import React, { Component } from 'react';
import { View } from 'react-native';

import { IconButton } from '../Button';

import styles from './styles';

class TaskBanner extends Component {
  handleTaskSelect = () => {
    console.log('press task widget');
    // this.props.navigation.navigate("CameraInstructions");
  };

  handleBuyCoin = () => {
    console.log('press buy coin');
  };

  render() {
    return (
      <View style={styles.container}>
        <IconButton iconName="price" text="價格" onPress={this.handleBuyCoin} />
        <IconButton iconName="send_money" text="付錢" onPress={this.handleBuyCoin} />
        <IconButton iconName="receive_money" text="收錢" onPress={this.handleBuyCoin} />
        <IconButton iconName="convert" text="買幣" onPress={this.handleBuyCoin} />
      </View>
    );
  }
}

export default TaskBanner;
