import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

import {colors} from '../../theme/colors';

const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.bg.primary};
    ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

export default SafeArea;
