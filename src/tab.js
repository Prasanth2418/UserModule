import React from "react";
import {  Image } from "react-native";
import {
  createBottomTabNavigator,
 
} from "@react-navigation/bottom-tabs";
import delivery from "../assets/delivery.png";
import Search from "../assets/search.png";
import profile from "../assets/profile.png";
import basket from "../assets/basket.png";


import User from "./User"
import HomeScreen from "../src/HomeScreen";
import bar from "./Search"
import cart from "./Cart"

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
       headerShown:false,
       tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: "trasparent",
          borderTopWidth: 0,
          elevation: 0,
          marginBottom:3
        },
      }}
     
    >
      <Tab.Screen
        name="Delivery"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode="contain"
              style={{ height: 35, width: 50 }}
              source={delivery}
            />
          ),
          
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={bar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
              source={Search}
            />
          ),
         
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Bag"
        component={cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
              source={basket}
            />
          ),
        
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
              source={profile}
            />
          ),
          
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
