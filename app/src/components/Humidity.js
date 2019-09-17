import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class Temperature extends Component  /* (this.props.value, this.props.label) */  {
        render() {
            return (
            <View style={{
                flex:1,
                justifyContent: 'flex-start',            
                alignItems: 'center',
            }}> 
                <View style={styles.tempBox}>
                    <Text style={styles.temp}>
                        {this.props.hum}%
                    </Text> 
                    <View >
                        <Text>
                            { this.props.label }
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

    const styles = StyleSheet.create({
        temp: {
            fontSize: 50,
            /* fontFamily: 'Arial' */
        },

        tempBox: {
            flex : 1,
            marginTop: 30,
            alignSelf: 'center',
            backgroundColor: '#dcdcdc',
            elevation: 1,
            maxHeight: 100,
            flexDirection: 'row',
        }
    })
