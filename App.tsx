import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthorsPage } from "./src/pages/AuthorsPage";
import { PostsPage } from "./src/pages/PostsPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Authors"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Authors" component={AuthorsPage} />
        <Stack.Screen name="Posts" component={PostsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
