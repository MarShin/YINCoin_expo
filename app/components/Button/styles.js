import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    // marginRight: 11,
    tintColor: '$white',
  },
  text: {
    color: '$white',
    fontSize: 20,
    // paddingVertical: 20,
    fontWeight: '300',
  },
});
