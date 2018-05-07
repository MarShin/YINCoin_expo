import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import last from 'lodash.last';

import { lastValueOrZero } from './helpers';
import styles from './styles';

const CurrentValue = connect(state => ({
  sum: Object.values(state.prices)
    .map(({ values }) => last(values) || { price: 0 })
    .reduce((sum, { price }) => sum + price, 0),
  btc: lastValueOrZero(state.prices['BTC-USD']),
  eth: lastValueOrZero(state.prices['ETH-USD']),
  ltc: lastValueOrZero(state.prices['LTC-USD']),
}))(({
  sum, btc, eth, ltc,
}) => (
  <View style={styles.currentValueContainer}>
    <Text>Current Crypto Value</Text>
    <Text>${sum.toFixed(2)}</Text>
    <View style={styles.currentValueCryptoView}>
      <Text style={styles.currentValueItem}>BTC: ${btc.price.toFixed(2)}</Text>
      <Text style={styles.currentValueItem}>ETH: ${eth.price.toFixed(2)}</Text>
      <Text style={styles.currentValueItem}>LTC: ${ltc.price.toFixed(2)}</Text>
    </View>
  </View>
));

export default CurrentValue;
