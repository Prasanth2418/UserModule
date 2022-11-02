import { View, Text, Image,TextInput } from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";

const Profile = ({navigation}) => {
  return (
    <View style={{ marginTop: 30 }}>
      <TouchableOpacity style={{ position: "relative", top: 22, left: 20 }} onPress={()=>navigation.navigate("user")}>
        <ArrowLeftIcon size={20} color="black" />
      </TouchableOpacity>

      <Text style={{ position: "relative", left: 45, fontSize: 20 }}>
        Complete your profile
      </Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={{
            borderRadius: 50,
            height: 100,
            width: 100,
          }}
        /><TouchableOpacity activeOpacity={0.6}>
             <Text style={{color:"red",fontSize:20,paddingTop:10}}>Change Photo</Text>
        </TouchableOpacity>
       
      </View>
      <View style={{marginTop:30}}>
      <Text style={{ paddingLeft: 15, fontSize:15 }}>Name:</Text>
        <TextInput
          style={{ height: 40, padding: 10,borderBottomWidth:0.5 ,marginLeft:10,marginRight:10}}
          placeholder="Name"
        />
        <Text style={{ paddingLeft: 15, fontSize:15,marginTop:30 }}>phone Number:</Text>
        <TextInput
          style={{ height: 40, padding: 10,borderBottomWidth:0.5 ,marginLeft:10,marginRight:10}}
          placeholder="Phone Number"
          />
          <Text style={{ paddingLeft: 15, fontSize:15,marginTop:30 }}>Email:</Text>
        <TextInput
          style={{ height: 40, padding: 10,borderBottomWidth:0.5 ,marginLeft:10,marginRight:10}}
          placeholder="Email"
          />
            <Text style={{ paddingLeft: 15, fontSize:15,marginTop:30 }}>Birthday:</Text>
        <TextInput
          style={{ height: 40, padding: 10,borderBottomWidth:0.5 ,marginLeft:10,marginRight:10}}
          placeholder="dd/mm/yyyy"
          />
            <Text style={{ paddingLeft: 15, fontSize:15,marginTop:30 }}>Gender:</Text>
        <TextInput
          style={{ height: 40, padding: 10,borderBottomWidth:0.5 ,marginLeft:10,marginRight:10}}
          placeholder="Gender"
          />
      </View>
      <View style={{marginTop:50,marginLeft:10,marginRight:10}}>
        <TouchableOpacity style={{backgroundColor:"red",height:45,borderRadius:5}} activeOpacity={0.7}>
        <Text style={{textAlign:"center",paddingTop:12,fontSize:17,color:"white"}}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
