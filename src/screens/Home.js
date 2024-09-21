import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

// react native maps
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import APIKEY from '../utils/apiKey';

const Home = () => {
  // for switching map to the current location
  const mapRef = useRef()
  // state for holding the latitude and longitude
  const [userLocation, setUserLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  // state for holding the current location name
  const [ origin, setOrigin ] = useState('');

  console.log('user state locations ---> ', userLocation);

  // getting the current Location of the user
  useEffect(() => {
    const fetchLocation = async () => {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(async (location) => {
          console.log(location);
          setUserLocation({
            latitude: location.latitude,
            longitude: location.longitude,
          });
  
          // Move the map to the current location
          if (mapRef) {
            mapRef.current.animateToRegion({
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }
  
          // Fetch location data
          try {
            const {data} = await axios.get(
              APIKEY
            );
            setOrigin(data ? data?.display_name : 'Location not found');
          } catch (error) {
            console.error('Error fetching location data:', error);
          }
        })
        .catch((error) => {
          const { code, message } = error;
          console.warn(code, message);
        });
    };
  
    // Function call --> getUser Location function
    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex: 0.7}}>
        <MapView
          ref={mapRef}
          style={styles.mapStyles}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: userLocation ? userLocation?.latitude : 37.78825,
            longitude: userLocation ? userLocation?.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: userLocation?.latitude || 37.78825,
              longitude: userLocation?.longitude || -122.4324,
            }}
          />
        </MapView>

        <View style={styles.headerStyle}>
          {/* Menu Icon */}
          <View style={styles.menuContainer}>
            <Ionicons name="menu" size={28} color="#333" />
          </View>

          {/* SearchBar */}
          <View style={styles.searchbarStyles}>
            <Entypo name="circle" size={18} color="#017A5C" />
            <TextInput
              value={origin}
              placeholder="Current Location"
              placeholderTextColor={'#333'}
              style = {{ flex: 1, color: '#000'}}
            />
          </View>
        </View>
      </View>

      {/* Second Box */}
      <View style={{flex: 0.3, padding: 20}}>
        <View style={styles.secondContainer}>
          {/* View for holding textInput and search Icon */}
          <View
            style={{
              backgroundColor: '#ffffff',
              margin: 10,
              borderRadius: 30,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            {/* Icon for search */}
            <Ionicons name="search" size={25} color="#333" />
            <TextInput
              value=""
              placeholder="Where you want to go?"
              placeholderTextColor={'grey'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mapStyles: {
    flex: 1,
  },
  headerStyle: {
    position: 'absolute',
    top: 35,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  menuContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbarStyles: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  secondContainer: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    borderRadius: 20,
  },
});