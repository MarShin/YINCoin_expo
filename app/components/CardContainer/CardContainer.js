import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { List, Card, Button } from 'react-native-elements';
import styles from './styles';

// const CardContainer = () => (
// <View>
//   <Card title="HELLO WORLD" image={require('./images/office.jpg')}>
//     <Text style={{ marginBottom: 10 }}>
//     The idea with React Native Elements is more about component structure than actual design.
//     </Text>
//     <Button
//       icon={{ name: 'code' }}
//       backgroundColor="#03A9F4"
//       buttonStyle={{
//       borderRadius: 0,
//       marginLeft: 0,
//       marginRight: 0,
//       marginBottom: 0,
//     }}
//       title="VIEW NOW"
//     />
//   </Card>
// </View>;
// );

class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Coming soon...</Text> */}
        <Card title="DUMMY CARDS" image={require('./images/office.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual
            design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>

        <Card title="HELLO WORLD" image={require('./images/office.jpg')}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual
            design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    );
  }
}

export default CardContainer;
