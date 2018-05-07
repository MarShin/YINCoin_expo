import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  currentValueContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  currentValueCryptoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentValueItem: {
    paddingHorizontal: 10,
  },

  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
  },
  number: {
    fontSize: 18,
  },
  minmax: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minmaxItem: {
    paddingHorizontal: 5,
  },
});

export default styles;
