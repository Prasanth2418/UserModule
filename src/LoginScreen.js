import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
  Alert
} from "react-native";
import React, { useState } from "react";
import Chicken1 from "../assets/Chicken1.png";
import { PhoneIcon } from "react-native-heroicons/solid";

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState(null);
  const Login = () => {
    navigation.navigate("tabs");
  };


  const makeCall = () => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${9347128304}";
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
          style: "cancel"
        },
        { text: "Ok"}
      ]
    );

  return (
    <View >
      <View style={styles.MainContainer}>
        <Text style={styles.container}>InfoEat</Text>
        <Text style={styles.container2}>
          welcome! Please login your account.
        </Text>
        <Image style={styles.tinyLogo} source={Chicken1} />
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
        <TouchableOpacity onPress={createAlert}   activeOpacity={0.8}>
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
        <TouchableOpacity onPress={Login}   activeOpacity={0.8}>
          <Text style={styles.button} >Login →</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: "center", marginTop: 15 }}>
        Don't Have an account? please contact admin!
      </Text>
      <TouchableOpacity onPress={makeCall}   activeOpacity={0.8}>
        <PhoneIcon color="orange" size={25} style={{alignSelf:"center",marginTop:10}}/>
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
    width: 340,
    height: 300,
    alignSelf: "center",
  },
  tinyLogo2: {
    width: 20,
    height: 25,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
