import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components';

import SettingsNavigation from './navigation/settings.navigation';
import Focus from './screens/focus/focus.screen';
import {theme} from './theme';
import {colors} from './theme/colors';

const Tab = createBottomTabNavigator();

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused}) => {
                            let iconName;
                            switch (route.name) {
                                case 'SettingsNavigation':
                                    iconName = focused
                                        ? 'settings'
                                        : 'settings-outline';
                                    break;
                                default:
                                    iconName = focused
                                        ? 'md-timer'
                                        : 'md-timer-outline';
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
                            paddingBottom: 16
                        }
                    })}>
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
