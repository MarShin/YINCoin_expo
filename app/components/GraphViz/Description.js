import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as d3 from 'd3';

import { chartValues } from './helpers';
import styles from './styles';

const Description = connect(state => ({
  times: Object.values(state.prices)
    .reduce((arr, { values }) => arr.concat(values), [])
    .map(({ time }) => time),
  prices: state.prices,
}))(({ times, prices }) => {
  const [start, end] = d3.extent(times);

  if (!start) {
    return (
      <View style={styles.descriptionContainer}>
        <Text>Waiting for data</Text>
      </View>
    );
  }

  const counts = chartValues(prices).map((value) => {
    const keys = Object.keys(value).filter(k => k !== 'time');
    return keys.reduce((sum, k) => sum + value[k], 0);
  });

  const format = d3.timeFormat('%I:%M:%S');

  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.number}>Transaction volume since</Text>
      <Text style={styles.number}>{format(start)}</Text>

      <Text>
        Average <Text style={styles.number}>{(d3.mean(counts) || 0).toFixed(1)}</Text> every 3
        seconds
      </Text>
      <View style={styles.minmax}>
        <Text style={styles.minmaxItem}>
          Min: <Text style={styles.number}>{d3.min(counts)}</Text>
        </Text>
        <Text style={styles.minmaxItem}>
          Max: <Text style={styles.number}>{d3.max(counts)}</Text>
        </Text>
      </View>
    </View>
  );
});

export default Description;
