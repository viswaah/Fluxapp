import React from "react";
import { Switch } from "react-native";
import { Feather } from "@expo/vector-icons";

import { colors } from "../../theme/colors";
import {
  SettingsMenuItem,
  SettingsMenuItemLabel,
  SettingsTitle,
  SettingsContainer,
  SettingsSelect,
} from "./settings.styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type SettingsProps = NativeStackScreenProps<
  {
    Select: {
      list: number[];
      selected: number;
    };
  },
  "Select"
>;

const flowDurations = [5, 10, 15, 20, 25, 30, 40, 50, 60];
const shortBreakDurations = [5, 10, 15, 20];
const longBreakDurations = [15, 20, 25, 30, 40, 50, 60];

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const [autoBreak, setAutoBreak] = React.useState(false);
  const [autoFlow, setAutoFlow] = React.useState(false);
  const [metronome, setMetronome] = React.useState(false);
  const [flowDurationIndex, setFlowDurationIndex] = React.useState(4);
  const [shortBreakDurationIndex, setShortBreakDurationIndex] =
    React.useState(0);
  const [longBreakDurationIndex, setLongBreakDurationIndex] = React.useState(3);

  return (
    <SettingsContainer>
      <SettingsTitle>Sessions</SettingsTitle>
      <SettingsMenuItem>
        <SettingsMenuItemLabel>Start flow automatically</SettingsMenuItemLabel>
        <Switch
          value={autoFlow}
          thumbColor="#fff"
          trackColor={{ true: colors.bg.success, false: colors.bg.disabled }}
          onValueChange={setAutoFlow}
        />
      </SettingsMenuItem>
      <SettingsMenuItem>
        <SettingsMenuItemLabel>Start Break automatically</SettingsMenuItemLabel>
        <Switch
          value={autoBreak}
          thumbColor="#fff"
          trackColor={{ true: colors.bg.success, false: colors.bg.disabled }}
          onValueChange={setAutoBreak}
        />
      </SettingsMenuItem>
      <SettingsMenuItem>
        <SettingsMenuItemLabel>Flow duration</SettingsMenuItemLabel>
        <SettingsSelect
          onPress={() => {
            navigation.navigate("Select", {
              list: flowDurations,
              selected: flowDurationIndex,
            });
          }}
        >
          <SettingsMenuItemLabel>
            {flowDurations[flowDurationIndex]}m
          </SettingsMenuItemLabel>
          <Feather name="chevron-right" size={24} color="black" />
        </SettingsSelect>
      </SettingsMenuItem>
      <SettingsMenuItem>
        <SettingsMenuItemLabel>Short Break duration</SettingsMenuItemLabel>
        <SettingsSelect
          onPress={() => {
            navigation.navigate("Select", {
              list: shortBreakDurations,
              selected: shortBreakDurationIndex,
            });
          }}
        >
          <SettingsMenuItemLabel>
            {shortBreakDurations[shortBreakDurationIndex]}m
          </SettingsMenuItemLabel>
          <Feather name="chevron-right" size={24} color="black" />
        </SettingsSelect>
      </SettingsMenuItem>
      <SettingsMenuItem>
        <SettingsMenuItemLabel>Long Break duration</SettingsMenuItemLabel>
        <SettingsSelect
          onPress={() => {
            navigation.navigate("Select", {
              list: longBreakDurations,
              selected: longBreakDurationIndex,
            });
          }}
        >
          <SettingsMenuItemLabel>
            {longBreakDurations[longBreakDurationIndex]}m
          </SettingsMenuItemLabel>
          <Feather name="chevron-right" size={24} color="black" />
        </SettingsSelect>
      </SettingsMenuItem>
      <SettingsTitle>General</SettingsTitle>
      <SettingsMenuItem>
        <SettingsMenuItemLabel>Metronome</SettingsMenuItemLabel>
        <Switch
          value={metronome}
          thumbColor="#fff"
          trackColor={{ true: colors.bg.success, false: colors.bg.disabled }}
          onValueChange={setMetronome}
        />
      </SettingsMenuItem>
    </SettingsContainer>
  );
};

export default Settings;
