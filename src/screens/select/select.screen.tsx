import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  SelectContainer,
  SelectItem,
  SelectItemLabel,
  SelectItemTouchable,
} from "./select.styles";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type SelectProps = NativeStackScreenProps<
  {
    Select: {
      list: number[];
      selected: number;
    };
    Settings: {};
  },
  "Select",
  "Settings"
>;

const Select: React.FC<SelectProps> = (props) => {
  const { navigation, route } = props;
  const { list, selected } = route.params;
  return (
    <SelectContainer>
      {list.map((number, idx) => (
        <SelectItem key={idx}>
          <SelectItemTouchable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <SelectItemLabel>{number}m</SelectItemLabel>
            {idx === selected && (
              <Feather name="check" size={24} color="black" />
            )}
          </SelectItemTouchable>
        </SelectItem>
      ))}
    </SelectContainer>
  );
};

export default Select;
