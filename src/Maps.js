import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";

const Tracking = ({ navigation }) => {
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  let { longitude, latitude } = pin;
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPin({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsMyLocationButton={true}
        showsUserLocation={true}
        onRegionChangeComplete={(e) => setPin(e)}
        maxZoomLevel={20}
      >
        <Marker coordinate={pin} draggable={true}></Marker>
      </MapView>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "75%",
    width: "100%",
    alignItems: "center",
    marginTop: 25,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Tracking;
