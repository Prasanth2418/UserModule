import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { SearchBar } from "react-native-elements";
import React, { useState } from "react";

const Search = () => {
  const [Search, setSearch] = useState({});
  const updateSearch = (Search) => {
    setSearch( Search );
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
            borderRadius:5,
            marginLeft:5,
            marginRight:5
        
          }}
          inputStyle={{ backgroundColor: "white", paddingBottom: 1, }}
          inputContainerStyle={{ backgroundColor: "white",borderRadius:15 }}
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
            color:"red"
          }}
        >
          Clear
        </Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default Search;
