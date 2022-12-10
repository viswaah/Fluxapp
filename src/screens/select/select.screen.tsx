import {Feather} from '@expo/vector-icons';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

import {updateSettings, useAppDispatch} from '../../redux';
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
            key: string;
        };
    },
    'Select'
>;

const Select: React.FC<SelectProps> = props => {
    const {navigation, route} = props;
    const {list, selected, key} = route.params;
    const dispatch = useAppDispatch();
    return (
        <SelectContainer>
            {list.map(number => (
                <SelectItem key={`${key}-${number}`}>
                    <SelectItemTouchable
                        onPress={() => {
                            dispatch(updateSettings({key, value: number}));
                            navigation.goBack();
                        }}>
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
