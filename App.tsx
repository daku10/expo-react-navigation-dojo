import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go o Details"
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here"
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go To Details... again"
        onPress={() => {
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100)
          });
        }}
      />
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
