import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Focus from "./screens/focus/focus.screen";
import { registerConfig } from "./localStorage";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsNavigation from "./navigation/settings.navigation";
import { colors } from "./theme/colors";

const Tab = createBottomTabNavigator();

export const App = () => {
  React.useEffect(() => {
    (async () => {
      try {
        const config = await registerConfig();
        console.log(config);
      } catch (err) {}
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              switch (route.name) {
                case "SettingsNavigation":
                  iconName = focused ? "settings" : "settings-outline";
                  break;
                case "Focus":
                  iconName = focused ? "md-timer" : "md-timer-outline";
                  break;
              }
              return (
                <Ionicons
                  name={iconName}
                  size={32}
                  color={colors.text.primary}
                />
              );
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              height: 64,
              paddingTop: 16,
              paddingBottom: 16,
            },
          })}
        >
          <Tab.Screen name="Focus" component={Focus} />
          <Tab.Screen
            name="SettingsNavigation"
            component={SettingsNavigation}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
