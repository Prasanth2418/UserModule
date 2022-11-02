import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import { Badge } from "react-native-elements";

import React, { useEffect, useState } from "react";

const Restaurent = ({ navigation }) => {
  const [data, setData] = useState({});

  const getMovies = async () => {
    return fetch('')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
    })
    .catch((error) => {
      console.error(error);
    });
 }

 useEffect(() => {
   getMovies();
 }, []);

  const showData = ({ item }) => {
    return (
      <View key={item.id}>
        <TouchableOpacity   activeOpacity={0.8}>
          <View style={[styles.card, styles.shadowProp]}>
            <Image
              source={{ uri:item.image }}
              style={styles.resto}
            />
            <Text style={styles.name}>
              {item.title}
            </Text>
           
            <Badge
              value="4.3☆"
              status="success"
              badgeStyle={{
                borderRadius: 5,
                width: 45,
                height: 25,
                position: "relative",
                marginLeft: "auto",
                marginRight: 20,
                top: -45,
              }}
              textStyle={{ fontSize: 15, fontWeight: "bold" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <FlatList data={data} renderItem={showData} scrollEnabled={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resto: {
    width: "100%",
    height: 175,
    borderColor: "white",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  name: {
    paddingLeft: 10,
    fontSize: 25,
  },
  card: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 20,
    height: 250,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 5,
    shadowRadius: 3,
  },
});

export default Restaurent;
