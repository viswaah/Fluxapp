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
`;

export const HorizontalPickerView = styled.View`
    width: 80px;
    justify-content: center;
    align-items: center;
`;
