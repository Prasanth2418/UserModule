import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-elements";
import {
  ArrowRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import {
  ShoppingBagIcon,
  ChevronRightIcon,
  HeartIcon,
  ClipboardListIcon,
  ChatAlt2Icon,
  LogoutIcon,
  ExclamationIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";

const User = ({navigation}) => {
  return (
    <View style={{ marginTop: 40 }}>
      <Card containerStyle={{ borderRadius: 20 }}>
        <Text
          style={{
            position: "relative",
            top: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Developer
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{ position: "relative", top: 45, color: "red", left: 1 }}
          >
            View activity <ArrowRightIcon color="red" size={10} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={{
              borderRadius: 50,
              height: 100,
              width: 100,
              marginLeft: "68%",
              marginTop: -45,
            }}
          />
        </TouchableOpacity>
      </Card>
      <View style={{ height: "78%", marginTop: 10 }}>
        <ScrollView>
          <Card containerStyle={{ borderRadius: 20, height: 350 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Food Orders
            </Text>
            <TouchableOpacity activeOpacity={0.8}>
              <ShoppingBagIcon
                color="black"
                style={{
                  borderRadius: 50,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  position: "relative",
                  marginLeft: "10%",
                  fontSize: 20,
                  top: -26,
                }}
              >
                Your orders
              </Text>
              <ChevronRightIcon
                color="black"
                style={{ position: "relative", marginLeft: "auto", top: -45 }}
              />
            </TouchableOpacity>
            <View
              style={{
                borderColor: "black",
                borderBottomWidth: 0.5,
                marginTop: -20,
              }}
            />
            <TouchableOpacity activeOpacity={0.8}>
              <HeartIcon
                color="black"
                style={{
                  borderRadius: 50,

                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  position: "relative",
                  marginLeft: "10%",
                  fontSize: 20,
                  top: -27,
                }}
              >
                Favorite food
              </Text>
              <ChevronRightIcon
                color="black"
                style={{ position: "relative", marginLeft: "auto", top: -45 }}
              />
            </TouchableOpacity>
            <View
              style={{
                borderColor: "black",
                borderBottomWidth: 0.9,
                marginTop: -20,
              }}
            />
            <TouchableOpacity activeOpacity={0.8}>
              <ClipboardListIcon
                color="black"
                style={{
                  borderRadius: 50,

                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  position: "relative",
                  marginLeft: "10%",
                  fontSize: 20,
                  top: -27,
                }}
              >
                Address book
              </Text>
              <ChevronRightIcon
                color="black"
                style={{ position: "relative", marginLeft: "auto", top: -45 }}
              />
            </TouchableOpacity>
            <View
              style={{
                borderColor: "black",
                borderBottomWidth: 0.9,
                marginTop: -20,
              }}
            />
            <TouchableOpacity activeOpacity={0.8}>
              <ChatAlt2Icon
                color="black"
                style={{
                  borderRadius: 50,
                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  position: "relative",
                  marginLeft: "10%",
                  fontSize: 20,
                  top: -27,
                }}
              >
                Help
              </Text>
              <ChevronRightIcon
                color="black"
                style={{ position: "relative", marginLeft: "auto", top: -45 }}
              />
            </TouchableOpacity>
          </Card>
          <Card containerStyle={{ borderRadius: 20, height: 100 }}>
            <TouchableOpacity activeOpacity={0.8}>
              <ExclamationIcon
                color="black"
                style={{
                  borderRadius: 50,

                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  position: "relative",
                  marginLeft: "10%",
                  fontSize: 20,
                  top: -27,
                }}
              >
                About
              </Text>
              <ChevronRightIcon
                color="black"
                style={{ position: "relative", marginLeft: "auto", top: -45 }}
              />
            </TouchableOpacity>
          </Card>
          <Card containerStyle={{ borderRadius: 20, height: 100 }}>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Questions")}>
              <QuestionMarkCircleIcon
                color="black"
                style={{
                  borderRadius: 50,

                  marginTop: 20,
                }}
              />
              <Text
                style={{
                  position: "relative",
                  marginLeft: "10%",
                  fontSize: 20,
                  top: -27,
                }}
              >
                Frequently asked questions
              </Text>
              <ChevronRightIcon
                color="black"
                style={{ position: "relative", marginLeft: "auto", top: -45 }}
              />
            </TouchableOpacity>
          </Card>

          <TouchableOpacity
            activeOpacity={0.5}
            style={{ alignSelf: "center", marginTop: 30 }}
          >
            <LogoutIcon
              color="red"
              style={{
                borderRadius: 50,
                marginTop: 20,
              }}
            />
            <Text
              style={{
                position: "relative",
                marginLeft: "10%",
                fontSize: 20,
                top: -27,
                color: "red",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default User;
