import { View, Text, TouchableOpacity, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import React, { useState } from "react";

const Search = () => {
  const [Search, setSearch] = useState({});
  const updateSearch = (Search) => {
    setSearch(Search);
  };
  return (
    <View style={{ margin: 0, padding: 0 }}>
      <View style={{ marginTop: 50 }}>
        <SearchBar
          placeholder="Search for items..."
          containerStyle={{
            backgroundColor: "none",
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5,
          }}
          inputStyle={{ backgroundColor: "white", paddingBottom: 1 }}
          inputContainerStyle={{ backgroundColor: "white", borderRadius: 15 }}
          platform="android"
          onChangeText={updateSearch}
        />
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.2,
          marginTop: 7,
        }}
      />
      <View>
        <Text style={{ marginTop: 10, paddingLeft: 10, fontSize: 17 }}>
          Search Result..
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              position: "relative",
              marginLeft: "auto",
              paddingRight: 20,
              top: -18,
              fontSize: 17,
              color: "red",
            }}
          >
            Clear
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{ marginLeft: 10 }}>
          <Image
            source={{
              uri: "https://img.onmanorama.com/content/dam/mm/en/food/in-season/Ramzan/Images/hyderabadi-dum-biryani.jpg",
            }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
          <Text
            style={{
              position: "relative",
              marginLeft: "18%",
              top: "-50%",
              fontSize: 15,
            }}
          >
            chicken biryani
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "18%",
              top: "-47%",
      
            }}
          >
            {" "}
            Dish
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{ marginLeft: 10 }}>
          <Image
            source={{
              uri: "https://farm5.staticflickr.com/4206/34630446624_ec6133ed16_o_d.jpg",
            }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
          <Text
            style={{
              position: "relative",
              marginLeft: "18%",
              top: "-50%",
              fontSize: 15,
            }}
          >
            Chicken Dum biryani
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "18%",
              top: "-47%",
      
            }}
          >
            {" "}
            Dish
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{ marginLeft: 10}}>
          <Image
            source={{
              uri: "https://jwalanam.in/wp-content/uploads/2017/08/chicken_biriyani.jpg",
            }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
          <Text
            style={{
              position: "relative",
              marginLeft: "18%",
              top: "-50%",
              fontSize: 15,
            }}
          >
             biryani
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "18%",
              top: "-47%",
      
            }}
          >
            {" "}
            Dish
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
