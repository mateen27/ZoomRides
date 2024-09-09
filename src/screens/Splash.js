import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = ({ navigation }) => {

    // redirecting to the Home page
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    }, [])

  return (
    <View style = { styles.container }>
        <StatusBar hidden />
        {/* <SplashScreen/> */}
        <Image style = { styles.imgStyles } source={require('../images/Logo.png')} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
    },
    imgStyles: {
        width: 280,
        height: 280,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 20,
        alignSelf: 'center'
    }
})