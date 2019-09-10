import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default Header = () => {
    const gay = () => {
       Alert.alert('....')
    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}> view>text </Text>
            {/* <TouchableOpacity style={styles.button} onPress={gay}> 
            <Text> clique para uma surpresa </Text>
            </TouchableOpacity> */}
        </View>
    );    
}

const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,
        backgroundColor: '#22B766',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    
    title: {
        marginTop: 20,
    },

    button: {
        backgroundColor: '#ddd'
    }
})
