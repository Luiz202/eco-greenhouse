import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

export default Culture = () => {
  return (
    <View style={styles.wrapper}>
        <Text style={styles.title}>
             Status da Cultura
        </Text> 
        <Text style={{alignSelf: 'center', marginTop: 10}}>
          Campo A1: Almeirão {"\n"}
          Colheita prevista para: 20/11
        </Text>

        <Text style={{alignSelf: 'center', marginTop: 10}}>
          Campo A2: Alface {"\n"}
          Colheita prevista para: 2/12
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
    },

    title: {
      marginTop: 10,
      fontSize: 24,

    }
})