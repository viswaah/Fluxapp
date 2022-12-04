import 'expo-dev-client';
import 'react-native-get-random-values';

import {registerRootComponent} from 'expo';
import React from 'react';

import AppWrapper from './src/AppWrapper';

const App = () => <AppWrapper />;

registerRootComponent(App);
