import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// react native maps
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Home = () => {
  return (
    <View style={styles.container}>
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
  }
});
