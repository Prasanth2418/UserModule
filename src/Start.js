import {
  View,
  Text,
  StyleSheet,
  Image,
  AppRegistry,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Logo from "../assets/Logo.png";

AppRegistry.registerComponent("AndroidFonts", () => AndroidFonts);

const Start = ({ navigation }) => {
  return (
    <View>
      <View style={styles.MainContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif",
          }}
        />
      </View>
      <Text style={{ textAlign: "center", fontSize: 25, marginTop: 20 }}>
        Welcome To InfoEat
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          padding: 20,
        }}
      >
        Eat a lot today at reasonable price.you will feel delighted with every
        bite.Quality of food is our first priority. Life is Combination of magic
        and pasta.
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text
          style={{
            backgroundColor: "orange",
            width: 150,
            height: 50,
            fontSize: 20,
            textAlign: "center",
            textAlignVertical: "center",
            borderRadius: 15,
            color: "white",
          }}
        >
          Get Started →
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: "orange",
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  tinyLogo: {
    width: 330,
    height: 400,
    alignSelf: "center",
    marginVertical: "8%",
  },
});

export default Start;
