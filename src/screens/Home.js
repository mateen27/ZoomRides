import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

// react native maps
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import getLocation from '../utils/getLocation';

const Home = () => {

  // getting the current Location of the user
  useEffect(() => {
    getLocation();
  }, [])

  return (
    <View style={styles.container}>
      <View style = {{ flex: 0.7 }}>
        <MapView
          style = { styles.mapStyles }
          provider={PROVIDER_GOOGLE}  // to make sure that goolge maps are only visible on both android and iOS devices.
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View style = { styles.headerStyle }>
          {/* Menu Icon */}
          <View style = { styles.menuContainer }>
            <Ionicons name = 'menu' size = {28} color = '#333' />
          </View>

          {/* SearchBar */}
          <View style = { styles.searchbarStyles }>
            <Entypo name = 'circle' size = {18} color = '#017A5C' />
            <TextInput value = '' placeholder='Current Location' placeholderTextColor={'#333'}/>
          </View>
        </View>
      </View>

      {/* Second Box */}
      <View style = {{ flex: 0.3, padding: 20 }}>
          <View style = { styles.secondContainer}>
            {/* View for holding textInput and search Icon */}
            <View style = {{ backgroundColor: '#ffffff', margin: 10, borderRadius: 30, paddingHorizontal: 10, flexDirection:'row', alignItems: 'center', gap: 10 }}>
              {/* Icon for search */}
              <Ionicons name = 'search' size = {25} color = '#333' />
              <TextInput value='' placeholder='Where you want to go?' placeholderTextColor={'grey'} />
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
    flex: 1
  },
  headerStyle: {
    position: 'absolute',
    top: 35,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  menuContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchbarStyles: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20, 
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  secondContainer: {
    backgroundColor: '#EEEEEE',
    flex: 1,
    borderRadius: 20
  }
});
