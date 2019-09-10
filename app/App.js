import React from 'react';
import { StyleSheet, Text, View, screenWidth, /* Button */ } from 'react-native';
// import Graph from './src/components/Graph';
import Header from './src/components/Header';

export default App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Header />  
       </View>
      <View style={styles.container}>
        <Text style={styles.title}>app>text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    /* padding: 16, */
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 16,
    backgroundColor: '#ddd',
    fontSize: 20,
  }, 
  
  title2: {
    marginTop: 16,
    backgroundColor: '#f00',
    fontSize: 20,
  }
});
