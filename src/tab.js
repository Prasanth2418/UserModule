import React from "react";
import {  Image } from "react-native";
import {
  createBottomTabNavigator,
 
} from "@react-navigation/bottom-tabs";

import {  CashIcon,ShoppingBagIcon,SearchIcon,HomeIcon } from "react-native-heroicons/outline";

import User from "./User"
import HomeScreen from "../src/HomeScreen";
import bar from "./Search"
import cart from "./Cart"
import Wallet from "./wallet";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
       headerShown:false,
     
        tabBarStyle: {
          backgroundColor: "trasparent",
          borderTopWidth: 0,
          elevation: 0,
          marginBottom:10
        },
      }}
     
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color="black" size={30}/>
          ),
          
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        component={bar}
        options={{
          tabBarIcon: ({ focused }) => (
          <SearchIcon color="black" size={30}/>
          ),
         
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Bag"
        component={cart}
        options={{
          tabBarIcon: ({ focused }) => (
          <ShoppingBagIcon color="black" size={30}/>
          ),
        
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Wallet & cards"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <CashIcon color="black" size={30}/>
          ),
          
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
