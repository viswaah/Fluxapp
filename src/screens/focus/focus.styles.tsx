import styled from 'styled-components/native';

import {colors} from '../../theme/colors';
import {fontSizes} from '../../theme/fonts';
import {sizes} from '../../theme/sizes';
import {spaces} from '../../theme/spaces';

export const TypeText = styled.Text`
    font-size: ${fontSizes.h4};
    color: ${colors.text.secondary};
`;

export const FocusContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.bg.primary};
`;

export const FocusTitleContainer = styled.View`
    width: 100%;
    padding: ${spaces[4]};
`;

export const FocusTitleInput = styled.TextInput`
    background-color: ${colors.bg.secondary};
    color: ${colors.text.primary};
    font-size: ${fontSizes.title};
    padding-right: ${spaces[4]};
    padding-left: ${spaces[4]};
    height: ${sizes[3]};
    width: 100%;
    border-radius: ${spaces[5]};
    border: 4px;
    border-color: ${colors.text.primary};
`;

export const EditFocusButton = styled.View`
    background-color: ${colors.text.primary};
    height: 48px;
    width: 48px;
    border-radius: ${sizes[3]};
    position: absolute;
    right: 40px;
    top: 40px;
    justify-content: center;
    align-items: center;
`;

export const ControlsContainer = styled.View`
    flex-direction: row;
    padding: ${spaces[4]};
    justify-content: space-between;
    align-items: center;
`;

export const PrimaryControl = styled.TouchableOpacity`
    background-color: ${colors.bg.secondary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: ${sizes[3]};
    border-radius: ${sizes[3]};
    margin-left: ${spaces[2]};
    margin-right: ${spaces[2]};
    border-width: 4px;
    border-color: ${colors.text.primary};
`;

export const PrimaryControlText = styled.Text`
    font-size: ${fontSizes.h5};
    color: ${colors.text.primary};
`;

export const SecondaryControl = styled.TouchableOpacity`
    background-color: ${colors.text.primary};
    width: ${sizes[3]};
    height: ${sizes[3]};
    align-items: center;
    justify-content: center;
    border-radius: ${sizes[3]};
`;
