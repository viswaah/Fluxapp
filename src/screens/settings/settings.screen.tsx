import {Feather} from '@expo/vector-icons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Switch} from 'react-native';

import {updateSettings, useAppDispatch, useAppSelector} from '../../redux';
import {colors} from '../../theme/colors';
import {
    SettingsContainer,
    SettingsMenuItem,
    SettingsMenuItemLabel,
    SettingsSelect,
    SettingsTitle
} from './settings.styles';

type SettingsProps = NativeStackScreenProps<
    {
        Select: {
            list: number[];
            selected: number;
            key: string;
        };
    },
    'Select'
>;

const flowDurations = [5, 10, 15, 20, 25, 30, 40, 50, 60];
const shortBreakDurations = [5, 10, 15, 20];
const longBreakDurations = [15, 20, 25, 30, 40, 50, 60];

const Settings: React.FC<SettingsProps> = ({navigation}) => {
    const dispatch = useAppDispatch();
    const {
        START_FLOW_AUTOMATICALLY,
        FOCUS_MINUTES,
        BREAK_MINUTES,
        START_BREAK_AUTOMATICALLY,
        LONG_BREAK_MINUTES,
        METRONOME
    } = useAppSelector(state => state.settings);

    return (
        <SettingsContainer>
            <SettingsTitle>Sessions</SettingsTitle>
            <SettingsMenuItem>
                <SettingsMenuItemLabel>
                    Start flow automatically
                </SettingsMenuItemLabel>
                <Switch
                    value={START_FLOW_AUTOMATICALLY}
                    thumbColor="#fff"
                    trackColor={{
                        true: colors.bg.success,
                        false: colors.bg.disabled
                    }}
                    onValueChange={() => {
                        dispatch(
                            updateSettings({
                                key: 'START_FLOW_AUTOMATICALLY',
                                value: !START_FLOW_AUTOMATICALLY
                            })
                        );
                    }}
                />
            </SettingsMenuItem>
            <SettingsMenuItem>
                <SettingsMenuItemLabel>
                    Start Break automatically
                </SettingsMenuItemLabel>
                <Switch
                    value={START_BREAK_AUTOMATICALLY}
                    thumbColor="#fff"
                    trackColor={{
                        true: colors.bg.success,
                        false: colors.bg.disabled
                    }}
                    onValueChange={() => {
                        dispatch(
                            updateSettings({
                                key: 'START_BREAK_AUTOMATICALLY',
                                value: !START_BREAK_AUTOMATICALLY
                            })
                        );
                    }}
                />
            </SettingsMenuItem>
            <SettingsMenuItem>
                <SettingsMenuItemLabel>Flow duration</SettingsMenuItemLabel>
                <SettingsSelect
                    onPress={() => {
                        navigation.navigate('Select', {
                            list: flowDurations,
                            selected: FOCUS_MINUTES,
                            key: 'FOCUS_MINUTES'
                        });
                    }}
                >
                    <SettingsMenuItemLabel>
                        {FOCUS_MINUTES}m
                    </SettingsMenuItemLabel>
                    <Feather name="chevron-right" size={24} color="black" />
                </SettingsSelect>
            </SettingsMenuItem>
            <SettingsMenuItem>
                <SettingsMenuItemLabel>
                    Short Break duration
                </SettingsMenuItemLabel>
                <SettingsSelect
                    onPress={() => {
                        navigation.navigate('Select', {
                            list: shortBreakDurations,
                            selected: BREAK_MINUTES,
                            key: 'BREAK_MINUTES'
                        });
                    }}
                >
                    <SettingsMenuItemLabel>
                        {BREAK_MINUTES}m
                    </SettingsMenuItemLabel>
                    <Feather name="chevron-right" size={24} color="black" />
                </SettingsSelect>
            </SettingsMenuItem>
            <SettingsMenuItem>
                <SettingsMenuItemLabel>
                    Long Break duration
                </SettingsMenuItemLabel>
                <SettingsSelect
                    onPress={() => {
                        navigation.navigate('Select', {
                            list: longBreakDurations,
                            selected: LONG_BREAK_MINUTES,
                            key: 'LONG_BREAK_MINUTES'
                        });
                    }}
                >
                    <SettingsMenuItemLabel>
                        {LONG_BREAK_MINUTES}m
                    </SettingsMenuItemLabel>
                    <Feather name="chevron-right" size={24} color="black" />
                </SettingsSelect>
            </SettingsMenuItem>
            <SettingsTitle>General</SettingsTitle>
            <SettingsMenuItem>
                <SettingsMenuItemLabel>Metronome</SettingsMenuItemLabel>
                <Switch
                    value={METRONOME}
                    thumbColor="#fff"
                    trackColor={{
                        true: colors.bg.success,
                        false: colors.bg.disabled
                    }}
                    onValueChange={() => {
                        dispatch(
                            updateSettings({
                                key: 'METRONOME',
                                value: !METRONOME
                            })
                        );
                    }}
                />
            </SettingsMenuItem>
        </SettingsContainer>
    );
};

export default Settings;
