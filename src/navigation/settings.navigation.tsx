import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Select from '../screens/select/select.screen';
import Settings from '../screens/settings/settings.screen';

const Stack = createNativeStackNavigator();

const SettingsNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Select" component={Select} />
    </Stack.Navigator>
);

export default SettingsNavigation;
