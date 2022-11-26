import {Feather} from '@expo/vector-icons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  SelectContainer,
  SelectItem,
  SelectItemLabel,
  SelectItemTouchable,
} from "./select.styles";
import { updateSettings, useAppDispatch } from "../../redux";

type SelectProps = NativeStackScreenProps<
  {
    Select: {
      list: number[];
      selected: number;
      key: string;
    };
    Settings: {};
  },
  "Select",
  "Settings"
>;

const Select: React.FC<SelectProps> = (props) => {
  const { navigation, route } = props;
  const { list, selected, key } = route.params;
  const dispatch = useAppDispatch();
  return (
    <SelectContainer>
      {list.map((number, idx) => (
        <SelectItem key={idx}>
          <SelectItemTouchable
            onPress={() => {
              dispatch(updateSettings({ key, value: number }));
              navigation.goBack();
            }}
          >
            <SelectItemLabel>{number}m</SelectItemLabel>
            {number === selected && (
              <Feather name="check" size={24} color="black" />
            )}
          </SelectItemTouchable>
        </SelectItem>
      ))}
    </SelectContainer>
  );
};

export default Select;
