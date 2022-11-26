import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { RealmContext } from "./models";
import { App } from "./App";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

//* Real non sync : to store online need to enable sync
export const AppWrapper = () => {
  const { RealmProvider } = RealmContext;

  console.log("* REALM PATH: " + Realm.defaultPath); //* ==> local db path

  return (
    <SafeAreaView style={styles.screen}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RealmProvider>
            <App />
          </RealmProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
