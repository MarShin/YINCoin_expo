import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

// const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
// const ICON_COLOR = '#868686';
// const ICON_SIZE = 23;
const firstTime = true;

class Prices extends Component {
  handlePress = () => {
    console.log('row press');
    // just go back to the previous stacked screen, no object passed
    // this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <Text> PRICE PAGE </Text>
      </View>
    );
  }
}
export default Prices;
