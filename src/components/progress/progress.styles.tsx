import styled from 'styled-components/native';

import {colors} from '../../theme/colors';
import {spaces} from '../../theme/spaces';

const circleSize = '20px';
const gapBetweenCircles = spaces[2];

export const ProgressContainer = styled.View`
    flex-direction: row;
`;

export const SingleProgressItem = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Unfinished = styled.View`
    height: ${circleSize};
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    overflow: hidden;
    width: ${circleSize};
    border-radius: ${circleSize};
    background-color: ${colors.bg.secondary};
`;

export const ProgressLine = styled.View`
    height: 4px;
    width: ${gapBetweenCircles};
    background-color: ${({finished = true}) =>
        finished ? colors.bg.tertiary : colors.bg.secondary};
`;

export const Running = styled.View`
    height: ${circleSize};
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    overflow: hidden;
    width: ${circleSize};
    border-radius: ${circleSize};
    border-style: solid;
    border-width: 4px;
    border-color: ${colors.bg.tertiary};
`;

export const Finished = styled.View`
    height: ${circleSize};
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    overflow: hidden;
    width: ${circleSize};
    border-radius: ${circleSize};
    background-color: ${colors.bg.tertiary};
`;
