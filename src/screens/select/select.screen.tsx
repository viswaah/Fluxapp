import {Feather} from '@expo/vector-icons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {
    SelectContainer,
    SelectItem,
    SelectItemLabel,
    SelectItemTouchable
} from './select.styles';

type SelectProps = NativeStackScreenProps<
    {
        Select: {
            list: number[];
            selected: number;
        };
        Settings: {};
    },
    'Select',
    'Settings'
>;

const Select: React.FC<SelectProps> = props => {
    const {navigation, route} = props;
    const {list, selected} = route.params;
    return (
        <SelectContainer>
            {list.map((number, idx) => (
                <SelectItem key={idx}>
                    <SelectItemTouchable
                        onPress={() => {
                            navigation.goBack();
                        }}>
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
