import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initData } from '../actions/actions'; // redux thunk, initiates the dataflow the app relies on

// you should import these later
import CurrentValue from '../components/GraphViz/CurrentValue';
import TransactionVolumeGraph from '../components/GraphViz/TransactionVolumeGraph';
import Description from '../components/GraphViz/Description';

class CryptoViz extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(initData());
  }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="dark-content" />
        <CurrentValue />
        <TransactionVolumeGraph />
        <Description />
      </View>
    );
  }
}

// export default CryptoViz;
export default connect(state => state)(CryptoViz);
