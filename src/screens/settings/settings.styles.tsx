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
    padding-top: ${spaces[2]};
    padding-bottom: ${spaces[2]};
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${colors.text.disabled};
`;

export const SettingsMenuItemLabel = styled.Text`
    font-size: ${fontSizes.body};
    color: ${colors.text.primary};
`;

export const SettingsSelect = styled.TouchableOpacity`
    flex-direction: row;
`;
