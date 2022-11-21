import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
import Focus from "./screens/Focus";
import { registerConfig } from "./localStorage";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

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
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Focus />
      </View>
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
