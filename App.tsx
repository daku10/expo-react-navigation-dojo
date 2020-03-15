import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

function Feed() {
  return (
    <View>
      <Text>This is Feed</Text>
    </View>
  );
}

function Messages() {
  return (
    <View>
      <Text>This is Messages</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>This is Profile</Text>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>This is Settings</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
