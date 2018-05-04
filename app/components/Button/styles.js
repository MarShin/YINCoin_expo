import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    // paddingVertical: 20,
    padding: 20,
  },
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    tintColor: '$white',
  },
  text: {
    color: '$white',
    fontSize: 15,
    // paddingVertical: 20,
    fontWeight: '300',
  },
});
