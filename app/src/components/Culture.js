import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default Culture = () => {
  return (
    <View style={styles.wrapper}>
        <Text>
            Culture Status 
        </Text> 
    </View>
  );
}

const styles  = StyleSheet.create({
    wrapper: {
        flex: 1, 
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#ccc',
        elevation: 10,
    }
})