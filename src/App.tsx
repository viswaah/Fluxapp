import {Ionicons} from '@expo/vector-icons';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import {
    NavigationContainer,
    ParamListBase,
    RouteProp
} from '@react-navigation/native';
import React from 'react';

import Focus from './screens/focus/focus.screen';
import Settings from './screens/settings/settings.screen';
import {colors} from './theme/colors';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Focus: 'md-timer',
    Settings: 'settings'
};

const createScreenOptions:
    | BottomTabNavigationOptions
    | ((props: {
          route: RouteProp<ParamListBase, string>;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          navigation: any;
      }) => BottomTabNavigationOptions) = ({route}) => {
    const iconName = TAB_ICON[route.name];
    const nonFocusIconName = `${iconName}-outline` as never;
    return {
        tabBarIcon: ({size, color, focused}) => {
            if (focused)
                return <Ionicons name={iconName} size={size} color={color} />;
            return (
                <Ionicons name={nonFocusIconName} size={size} color={color} />
            );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: colors.bg.secondary
        },
        tabBarActiveTintColor: colors.text.primary,
        tabBarInactiveTintColor: colors.text.primary,
        tabBarActiveBackgroundColor: colors.bg.secondary,
        tabBarInactiveBackgroundColor: colors.bg.secondary
    };
};

export const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Focus" component={Focus} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
