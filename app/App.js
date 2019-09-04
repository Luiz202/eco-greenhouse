import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
