import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

// const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Prices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
  }

  // handlePress = () => {
  //   console.log('row press');
  //   // just go back to the previous stacked screen, no object passed
  //   // this.props.navigation.goBack(null);
  // };

  componentDidMount() {
    this.requestHuPay();
  }

  requestHuPay = () => {
    console.log('fetching price..');
    const endpoint = 'https://hupay.herokuapp.com/token/balance/';
    const address = '0x5ff2c17ada131e5D9fa0f927395Abe35657e4768';

    fetch(endpoint + address)
      .then(res => res.json())
      .then((res) => {
        console.log(res.amount);
        this.setState({
          data: this.state.data.append(res.amount),
          loading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });

    console.log('the final price is: ');
    console.log(this.state.data);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <Text> {this.state.data}</Text>
      </View>
    );
  }
}
export default Prices;
