import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {RealmContext} from './models';
import {App} from './App';

//* Real non sync : to store online need to enable sync
export const AppWrapper = () => {
  const {RealmProvider} = RealmContext;

  return (
    <SafeAreaView style={styles.screen}>
      <RealmProvider>
        <App />
      </RealmProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
