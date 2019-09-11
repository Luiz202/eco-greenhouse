import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert, Dimensions, Image, } from 'react-native'
import Status from './Status'
import Temperature from './Temperature'


/* const viewportWidth = Dimensions.get('window').width
const viewportHeight = Dimensions.get('window').height */

export default Header = () => {
    const menuToggle = () => {
       Alert.alert('quem clico e gay')
    }

    return (
        <View style={{flex: 1}}>
            <Status />
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.button} onPress={menuToggle}> 
                    <View style={styles.btnIcon}> 
                        <Image 
                            style={styles.image}
                            source={require('../../assets/hamburger.png')}
                        /> 
                    </View>
                </TouchableOpacity>
            </View>
            <Temperature />

        </View>
    );    
}

const styles = StyleSheet.create ({
    wrapper: {
        flex: 1,
        backgroundColor: '#22B766',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        flexDirection: 'row',
        alignSelf: 'stretch',
        maxHeight: 50, 
        elevation: 10
    },
    
    title: {
        marginTop: 20,
    },

    button: {
        // backgroundColor: '#ddd'
    },
    image: {
        width: 60,
        height: 60
    }
})
