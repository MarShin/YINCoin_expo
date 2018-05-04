import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const containerHeight = Dimensions.get('window').height * 0.8;

const styles = EStyleSheet.create({
  container: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 500,
    // marginTop: 400,
  },
});

export default styles;
