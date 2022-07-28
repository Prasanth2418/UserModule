import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Carousel, { PaginationLight } from "react-native-x-carousel";

const { width } = Dimensions.get("window");

const DATA = [
  {
    coverImageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADQsbD4_-TM4IdgNhpD42tjftW2EaLEfrYw&usqp=CAU",
    cornerLabelColor: "#FFD300",
    cornerLabelText: "50%",
  },
  {
    coverImageUri:
      "https://deckfamilyfarm.com/wordpress/images/2015/09/poultryHerbRoastedChicken.jpg",
    cornerLabelColor: "#0080ff",
    cornerLabelText: "NEW",
  },
  {
    coverImageUri:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hjpbgpuoarzjiyarrqy5",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "75%",
  },
  {
    coverImageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtNgwz4jZIgUsgOZH1HzPb_33Y8H_5Q-OSw&usqp=CAU",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "35%",
  },
  {
    coverImageUri:
      "https://img.freepik.com/premium-photo/juicy-american-burger-hamburger-cheeseburger-with-two-beef-patties-with-sauce-basked-black-space_124865-5964.jpg?w=2000",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "20%",
  },
  {
    coverImageUri:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "25%",
  },
  {
    coverImageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxCIF4JWfqfUfibn3ougw8kq7gf1PlEvzsw&usqp=CAU",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "50%",
  },
  {
    coverImageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfl2-7k11UlMxW2niYxf629JB2klDz6k2JicbLqy2fZPL97QmC990hb-wXi4i2PbSKkc&usqp=CAU",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "30%",
  },
];

const Coursel = () => {
  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
    marginTop: 10,
  },
  cardWrapper: {
    borderRadius: 20,
    overflow: "hidden",
  },
  card: {
    width: 390,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 5,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
export default Coursel;
