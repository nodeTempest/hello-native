import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import { AuthorsPage } from "./src/pages/AuthorsPage";
import { PostsPage } from "./src/pages/PostsPage";

import { store } from "./src/state";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
