import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const Internet = ({ navigation }) => {
    const [isInternetConnected, setInternetIsConnected] = useState(false);
    function checkConn() {
        NetInfo.fetch().then((state) => {
            state.isConnected ? setInternetIsConnected(true) : setInternetIsConnected(false);
        })
    }
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>
                Your Internet is Not connected! or you don't have an Active Internet Connection!!!.
            </Text>
            <Text style={Styles.text}>Please Refresh to get Connected to the Internet</Text>
            <TouchableOpacity onPress={() => { checkConn(); isInternetConnected ? navigation.navigate('Engineering Drawing Tutorials') : null; }} style={Styles.refresh}>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: '700' }}>
                    Refresh Connection!!!
                </Text>
            </TouchableOpacity>
            <Text style={Styles.text} onPress={() => navigation.replace('Engineering Drawing Tutorials')}>Go Back</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    refresh: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    text: {
        margin: 10,
        fontSize: 20,
        textAlign:'center'
    }
})

export default Internet