import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
// import Chicken1 from "../assets/Chicken1.png";
import { PhoneIcon } from "react-native-heroicons/solid";

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState(null);
  const Login = () => {
    navigation.navigate("tabs");
  };

  const makeCall = () => {
    let phoneNumber = "";
    let number=9347128304
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = "telprompt:${1234567890}";
    }
    Linking.openURL(phoneNumber);
  };

  const createAlert = () =>
    Alert.alert(
      "You are Enable to Reset your password? Please Contact admin!",
      " support@infoeat.com",

      [
        {
          text: "Cancel",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Ok" },
      ]
    );

  return (
    <View>
      <View style={styles.MainContainer}>
        <Text style={styles.container}>InfoEat</Text>
        <Text style={styles.container2}>
          welcome! Please login your account.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://media3.giphy.com/media/cMPFORcCgdAjPGL4Fw/giphy.gif?cid=ecf05e471402xg0ua150r2soq9lzapnv8l9lyw0l0c7azsfm&rid=giphy.gif&ct=s",
          }}
        />
         <Image
          style={styles.tinyLogo3}
          source={{
            uri: "https://media3.giphy.com/media/eNvU27YpS3f7zyAvo6/giphy.gif?cid=ecf05e47bcwpgfej6th6vawlonipboy2b3fwv2u5h3ycadqu&rid=giphy.gif&ct=s",
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ paddingLeft: 17, fontSize: 20 }}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter your username"
          value={text}
        />
        <Text style={{ paddingLeft: 17, fontSize: 20 }}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={createAlert} activeOpacity={0.8}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 15,
              color: "orange",
              paddingRight: 15,
            }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Login} activeOpacity={0.8}>
          <Text style={styles.button}>Login →</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: "center", marginTop: 15 }}>
        Don't Have an account? please contact admin!
      </Text>
      <TouchableOpacity onPress={makeCall} activeOpacity={0.8}>
        <PhoneIcon
          color="orange"
          size={25}
          style={{ alignSelf: "center", marginTop: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: "orange",
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  container: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 25,
  },
  container2: {
    textAlign: "center",
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "orange",
    width: 150,
    height: 50,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    borderRadius: 15,
    color: "white",
    marginTop: 15,
  },
  tinyLogo: {
    width: 120,
    height: 55,
    alignSelf: "center",
    // marginTop:20
  },
  tinyLogo2: {
    width: 20,
    height: 25,
    alignSelf: "center",
    marginTop: 10,
  },
  tinyLogo3:{
    width: 250,
    height: 250,
    alignSelf: "center",
  
  }
});

export default LoginScreen;
