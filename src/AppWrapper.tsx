import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';

import {App} from './App';
import {RealmContext} from './models';
import {persistor, store} from './redux';
import {theme} from './theme';

//* Real non sync : to store online need to enable sync
const AppWrapper: React.FC = () => {
    const {RealmProvider} = RealmContext;

    console.log(`* REALM PATH: ${Realm.defaultPath}`); //* ==> local db path

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RealmProvider>
                        <App />
                        <StatusBar />
                    </RealmProvider>
                </PersistGate>
            </Provider>
        </ThemeProvider>
    );
};

export default AppWrapper;
