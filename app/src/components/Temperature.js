import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default Temperature = () => {
    return (
        <View style={{
            flex:1,
            justifyContent: 'flex-start',            
            alignItems: 'center',
        }}> 
            <View style={styles.tempBox}>
                <Text style={styles.temp}>
                    32oC
                </Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    temp: {
        fontSize: 50,
        /* fontFamily: 'Arial' */
    },

    tempBox: {
        flex : 1,
        marginTop: 30,
        alignSelf: 'flex-start',
        backgroundColor: '#ccc',
        maxHeight: 70,
        flexDirection: 'row',
    }
})


