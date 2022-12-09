import styled from 'styled-components/native';

import {colors} from '../../theme/colors';
import {fontSizes} from '../../theme/fonts';
import {spaces} from '../../theme/spaces';

export const SettingsContainer = styled.View`
    margin-right: ${spaces[2]};
    margin-left: ${spaces[2]};
`;

export const SettingsTitle = styled.Text`
    font-size: ${fontSizes.h5};
    margin-top: ${spaces[4]};
    margin-bottom: ${spaces[2]};
`;

export const SettingsMenuItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: ${spaces[3]};
    background-color: ${colors.bg.secondary};
    margin-bottom: ${spaces[2]};
    border-radius: ${spaces[3]};
    flex-wrap: wrap;
`;

export const SettingsMenuItemLabel = styled.Text`
    font-size: ${fontSizes.body};
    margin-right: ${spaces[1]};
    color: ${colors.text.primary};
`;

export const SettingsSelect = styled.TouchableOpacity`
    flex-direction: row;
`;

export const SettingsAccordion = styled.View`
    width: 100%;
    margin-top: ${spaces[2]};
    margin-bottom: ${spaces[1]};
`;

export const SettingsAccordionLabel = styled.Text`
    margin-bottom: ${spaces[1]};
    font-size: ${fontSizes.caption};
`;

export const HorizontalPickerView = styled.View`
    width: 80px;
    justify-content: center;
    align-items: center;
`;

export const HorizontalPickerViewMask = styled.View`
    width: 100%;
    position: absolute;
    height: 20;
    left: 0;
    bottom: 0;
    z-index: -10;
    justify-content: center;
    align-items: center;
`;

export const HorizontalPickerSelectedBox = styled.View`
    width: 24;
    height: 24;
    border-width: 2;
    border-radius: 4;
    border-color: black;
`;
