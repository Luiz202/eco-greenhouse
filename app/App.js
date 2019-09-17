import React from 'react';
import { StyleSheet, Text, View, screenWidth, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Culture from './src/components/Culture'

export default App = () => {
  return (<View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <Header />  
      <View style={styles.container}>
      </View>
      <Culture />
    </View>
  );
}

const styles = StyleSheet.create({

  
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
