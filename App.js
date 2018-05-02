import React from "react";
import { Text, View } from "react-native";
import Root from "./app/index";
export default class App extends React.Component {
  render() {
    return (
      <Root />
      // <View>
      //   <Text>Testing</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}
