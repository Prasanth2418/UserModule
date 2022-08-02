import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { ChevronDownIcon, UserCircleIcon } from "react-native-heroicons/outline";
import React, { useState } from "react";
import location from "../assets/location.png";
import Restaurent from "./Restaurent";
import Coursel from "./coursel";

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      Id: 1,
      image:
        "https://www.pngitem.com/pimgs/m/151-1519906_chicken-biryani-top-view-hd-png-download.png",
      name: "Biryani",
    },
    {
      Id: 2,
      image:
        "https://www.pngitem.com/pimgs/m/175-1754832_traditional-games-hardees-burger-png-kebab-burger-png.png",
      name: "snacks",
    },
    {
      Id: 3,
      image:
        "https://png.pngitem.com/pimgs/s/152-1522450_biryani-png-download-veg-biryani-images-hd-transparent.png",
      name: "Veg Biryani",
    },
    {
      Id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-uiYA_gewE8rtCErwk3wg7kUC-bwfe-XkQ&usqp=CAU",
      name: "Saalad",
    },
    {
      Id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vbbusNkRBS9kldO6jILAghMSPE0wKNZ1IQ&usqp=CAU",
      name: "Noodles",
    },
    {
      Id: 6,
      image:
        "https://www.seekpng.com/png/detail/59-590278_milkshake-kitkat-kit-kat-milkshake-png.png",
      name: "Shake",
    },
    {
      Id: 7,
      image:
        "https://envato-shoebox-0.imgix.net/41c1/dd70-8343-4117-91e8-ea319f86b20d/DSC_8853.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=74aaaeb3115d213d1e8b9f302178edbc",
      name: "Home Style",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrySdDQy70IFx_ArkBBEj3m0r2PG-ikYaZw&usqp=CAU",
      name: "Dosa",
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("maps")} activeOpacity={0.8}>
          <Image style={styles.tinyLogo} source={location} />
          <Text style={{ marginLeft: 55, marginTop: 13, fontSize: 20 }}>
            current Location{" "}
            <ChevronDownIcon style={{ color: "black" }} size={15} />
          </Text>
          <Text style={{ paddingLeft: 60 }}>Kukatpally,Hyderabad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "relative",
            marginLeft: "auto",
            marginRight: 15,
            top: "-28%",
          }}
          activeOpacity={0.8}
          onPress={()=>navigation.navigate("user")}
        >
          <UserCircleIcon color="black" size={35} />
         
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical={true}
        nestedScrollEnabled={true}
        style={{ marginBottom: 150 }}
      >
        <View>
          <Text style={{ fontSize: 20, paddingLeft: 10 }}>
            Eat what makes you happy
          </Text>
        </View>

        <View>
          <View style={{ height: 130, marginTop: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={true}
            >
              {data.map((Data, Id) => (
                <TouchableOpacity
                  key={Id}
                  onPress={() => navigation.navigate("rest")}
                  activeOpacity={0.8}
                >
                  <Image
                    style={styles.tinyLogo2}
                    source={{ uri: Data.image }}
                  />
                  <Text style={{ textAlign: "center" }}>{Data.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Check This Out</Text>
        <TouchableOpacity   activeOpacity={0.8}>
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Image
              source={{
                uri: "https://images.takecdn.com/Cdn/production/Images/73354d68-6955-4780-9da9-d57dd936f059.jpg",
              }}
              style={{
                width: "100%",
                height: 150,
                marginTop: 8,
                borderRadius: 20,
              }}
            />
          </View>
        </TouchableOpacity>

        <Text style={{ paddingLeft: 10, fontSize: 20, marginTop: 10 }}>
          In the spotlight
        </Text>

        <View>{<Coursel />}</View>
        <View>
          <Text style={{ paddingLeft: 10, fontSize: 20, marginTop: 20 }}>
            All restaurants around you
          </Text>
        </View>
        {<Restaurent />}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    height: 125,
  },
  tinyLogo: {
    width: 25,
    height: 35,
    position: "relative",
    top: 55,
    marginLeft: 25,
  },
  location: {
    position: "relative",
    textAlign: "center",
    top: 20,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
    width: 250,
    alignSelf: "center",
    height: 35,
    textAlignVertical: "center",
    borderRadius: 20,
    marginLeft: 50,
  },
  tinyLogo2: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
  },
  resto: {
    width: "100%",
    height: 175,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default HomeScreen;
