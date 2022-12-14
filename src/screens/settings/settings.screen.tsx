import {Feather} from '@expo/vector-icons';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import React from 'react';
import {Switch, Text} from 'react-native';

import SafeArea from '../../components/safe-area/safe-area.component';
import {updateSettings, useAppDispatch, useAppSelector} from '../../redux';
import {colors} from '../../theme/colors';
import {
    HorizontalPickerSelectedBox,
    HorizontalPickerView,
    HorizontalPickerViewMask,
    SettingsAccordion,
    SettingsAccordionLabel,
    SettingsContainer,
    SettingsMenuItem,
    SettingsMenuItemLabel,
    SettingsSelect,
    SettingsTitle
} from './settings.styles';

const flowDurations = [5, 10, 15, 20, 25, 30, 40, 50, 60];
const shortBreakDurations = [5, 10, 15, 20];
const longBreakDurations = [15, 20, 25, 30, 40, 50, 60];
const flowCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Settings: React.FC = () => {
    const dispatch = useAppDispatch();
    const {
        START_FLOW_AUTOMATICALLY,
        FOCUS_MINUTES,
        BREAK_MINUTES,
        START_BREAK_AUTOMATICALLY,
        LONG_BREAK_MINUTES,
        FLOW_COUNT
    } = useAppSelector(state => state.settings);
    const [accordionOpen, setAccordionOpen] = React.useState<
        'FLOW' | 'SHORT_BREAK' | 'LONG_BREAK' | 'COUNT' | null
    >(null);

    const updateAccordionOpen = (
        newValue: 'FLOW' | 'SHORT_BREAK' | 'LONG_BREAK' | 'COUNT'
    ): void => {
        if (accordionOpen === newValue) setAccordionOpen(null);
        else setAccordionOpen(newValue);
    };

    return (
        <SafeArea>
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
                            false: '#ccc'
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
                            false: '#ccc'
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
                            updateAccordionOpen('FLOW');
                        }}>
                        <SettingsMenuItemLabel>
                            {FOCUS_MINUTES}min
                        </SettingsMenuItemLabel>
                        <Feather
                            name={
                                accordionOpen === 'FLOW'
                                    ? 'chevron-up'
                                    : 'chevron-down'
                            }
                            size={24}
                            color="black"
                        />
                    </SettingsSelect>
                    {accordionOpen === 'FLOW' && (
                        <SettingsAccordion>
                            <SettingsAccordionLabel>
                                Minutes
                            </SettingsAccordionLabel>
                            <HorizontalPicker
                                data={flowDurations}
                                renderItem={item => (
                                    <HorizontalPickerView>
                                        <Text>{item}</Text>
                                    </HorizontalPickerView>
                                )}
                                itemWidth={80}
                                snapTimeout={0}
                                defaultIndex={flowDurations.findIndex(
                                    val => val === FOCUS_MINUTES
                                )}
                                onChange={number => {
                                    dispatch(
                                        updateSettings({
                                            key: 'FOCUS_MINUTES',
                                            value: flowDurations[number]
                                        })
                                    );
                                }}
                            />
                            <HorizontalPickerViewMask>
                                <HorizontalPickerSelectedBox />
                            </HorizontalPickerViewMask>
                        </SettingsAccordion>
                    )}
                </SettingsMenuItem>
                <SettingsMenuItem>
                    <SettingsMenuItemLabel>
                        Short Break duration
                    </SettingsMenuItemLabel>
                    <SettingsSelect
                        onPress={() => {
                            updateAccordionOpen('SHORT_BREAK');
                        }}>
                        <SettingsMenuItemLabel>
                            {BREAK_MINUTES}min
                        </SettingsMenuItemLabel>
                        <Feather
                            name={
                                accordionOpen === 'SHORT_BREAK'
                                    ? 'chevron-up'
                                    : 'chevron-down'
                            }
                            size={24}
                            color="black"
                        />
                    </SettingsSelect>
                    {accordionOpen === 'SHORT_BREAK' && (
                        <SettingsAccordion>
                            <SettingsAccordionLabel>
                                Minutes
                            </SettingsAccordionLabel>
                            <HorizontalPicker
                                data={shortBreakDurations}
                                renderItem={item => (
                                    <HorizontalPickerView>
                                        <Text>{item}</Text>
                                    </HorizontalPickerView>
                                )}
                                itemWidth={80}
                                snapTimeout={0}
                                defaultIndex={shortBreakDurations.findIndex(
                                    val => val === BREAK_MINUTES
                                )}
                                onChange={number => {
                                    dispatch(
                                        updateSettings({
                                            key: 'BREAK_MINUTES',
                                            value: shortBreakDurations[number]
                                        })
                                    );
                                }}
                            />
                            <HorizontalPickerViewMask>
                                <HorizontalPickerSelectedBox />
                            </HorizontalPickerViewMask>
                        </SettingsAccordion>
                    )}
                </SettingsMenuItem>
                <SettingsMenuItem>
                    <SettingsMenuItemLabel>
                        Long Break duration
                    </SettingsMenuItemLabel>
                    <SettingsSelect
                        onPress={() => {
                            updateAccordionOpen('LONG_BREAK');
                        }}>
                        <SettingsMenuItemLabel>
                            {LONG_BREAK_MINUTES}min
                        </SettingsMenuItemLabel>
                        <Feather
                            name={
                                accordionOpen === 'LONG_BREAK'
                                    ? 'chevron-up'
                                    : 'chevron-down'
                            }
                            size={24}
                            color="black"
                        />
                    </SettingsSelect>
                    {accordionOpen === 'LONG_BREAK' && (
                        <SettingsAccordion>
                            <SettingsAccordionLabel>
                                Minutes
                            </SettingsAccordionLabel>
                            <HorizontalPicker
                                data={longBreakDurations}
                                renderItem={item => (
                                    <HorizontalPickerView>
                                        <Text>{item}</Text>
                                    </HorizontalPickerView>
                                )}
                                itemWidth={80}
                                snapTimeout={0}
                                defaultIndex={longBreakDurations.findIndex(
                                    val => val === LONG_BREAK_MINUTES
                                )}
                                onChange={number => {
                                    dispatch(
                                        updateSettings({
                                            key: 'LONG_BREAK_MINUTES',
                                            value: longBreakDurations[number]
                                        })
                                    );
                                }}
                            />
                            <HorizontalPickerViewMask>
                                <HorizontalPickerSelectedBox />
                            </HorizontalPickerViewMask>
                        </SettingsAccordion>
                    )}
                </SettingsMenuItem>
                <SettingsMenuItem>
                    <SettingsMenuItemLabel>Flow count</SettingsMenuItemLabel>
                    <SettingsSelect
                        onPress={() => {
                            updateAccordionOpen('COUNT');
                        }}>
                        <SettingsMenuItemLabel>
                            {FLOW_COUNT}
                        </SettingsMenuItemLabel>
                        <Feather
                            name={
                                accordionOpen === 'COUNT'
                                    ? 'chevron-up'
                                    : 'chevron-down'
                            }
                            size={24}
                            color="black"
                        />
                    </SettingsSelect>
                    {accordionOpen === 'COUNT' && (
                        <SettingsAccordion>
                            <SettingsAccordionLabel>
                                Interval
                            </SettingsAccordionLabel>
                            <HorizontalPicker
                                data={flowCounts}
                                renderItem={item => (
                                    <HorizontalPickerView>
                                        <Text>{item}</Text>
                                    </HorizontalPickerView>
                                )}
                                itemWidth={80}
                                snapTimeout={0}
                                defaultIndex={flowCounts.findIndex(
                                    val => val === FLOW_COUNT
                                )}
                                onChange={number => {
                                    dispatch(
                                        updateSettings({
                                            key: 'FLOW_COUNT',
                                            value: flowCounts[number]
                                        })
                                    );
                                }}
                            />
                            <HorizontalPickerViewMask>
                                <HorizontalPickerSelectedBox />
                            </HorizontalPickerViewMask>
                        </SettingsAccordion>
                    )}
                </SettingsMenuItem>
            </SettingsContainer>
        </SafeArea>
    );
};

export default Settings;
