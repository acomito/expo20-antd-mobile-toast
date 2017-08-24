import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Toast } from 'antd-mobile';

export default class App extends React.Component {
  onClick = () => {
     Toast.info('This is a toast tips !!!', 1);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPressIn={this.onClick}>
          TOAST ME
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
