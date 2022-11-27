import styled from 'styled-components';

import {colors} from '../../theme/colors';
import {fontSizes} from '../../theme/fonts';
import {spaces} from '../../theme/spaces';

export const SelectContainer = styled.View`
    margin-right: ${spaces[2]};
    margin-left: ${spaces[2]};
`;

export const SelectItem = styled.View`
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${colors.text.disabled};
`;

export const SelectItemTouchable = styled.TouchableOpacity`
    padding-top: ${spaces[3]};
    padding-bottom: ${spaces[3]};
    flex-direction: row;
    justify-content: space-between;
`;

export const SelectItemLabel = styled.Text`
    font-size: ${fontSizes.body};
    color: ${colors.text.primary};
`;
