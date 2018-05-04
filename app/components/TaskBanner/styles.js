import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// const bannerHeight = Dimensions.get('window').height * 0.2;
const bannerWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: bannerWidth,
    backgroundColor: '$lightBlue',
    flexDirection: 'row',
  },
  // text: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '$darkGray',
  //   height: 20,
  //   paddingBottom: 50,
  // },
});

export default styles;
