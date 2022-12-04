import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {App} from './App';
import {RealmContext} from './models';
import {persistor, store} from './redux';

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

//* Real non sync : to store online need to enable sync
const AppWrapper: React.FC = () => {
    const {RealmProvider} = RealmContext;

    console.log(`* REALM PATH: ${Realm.defaultPath}`); //* ==> local db path

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

export default AppWrapper;
