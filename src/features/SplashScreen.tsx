import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors } from '@utils/Constants'
import { screenHeight, screenWidth } from '@utils/Scaling'
import Logo from '@assets/images/splash_logo.jpeg'
import GeoLocation from '@react-native-community/geolocation'

GeoLocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    enableBackgroundLocationUpdates: true,
    locationProvider: 'auto'
})

const SplashScreen: FC = () => {



    useEffect(() => {
        const fetchUserLoaction = async () => {
            try {
                GeoLocation.requestAuthorization()
            } catch (error) {
                Alert.alert("Sorry we need your location service")
            }
        }
        const timeoutId = setTimeout(fetchUserLoaction, 1000)
        return () => clearTimeout(timeoutId)
    },[])

  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logoImage}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoImage: {
        height: screenHeight * 0.7,
        width: screenWidth * 0.7,
        resizeMode: "contain"
    }
})