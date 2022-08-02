import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./src/Start";
import LoginScreen from "./src/LoginScreen";

import Maps from "./src/Maps";
import Tabs from "./src/tab";
import Restaurent from "./src/Restaurent";
import Menu from "./src/Menu";
import User from "./src/User";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={"start"}
          headerShown="none"
        >
          <Stack.Screen name="start" component={Start} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="maps" component={Maps} />
          <Stack.Screen name="tabs" component={Tabs} />
          <Stack.Screen name="rest" component={Restaurent} />
          <Stack.Screen name="menu" component={Menu} />
          <Stack.Screen name="user" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
