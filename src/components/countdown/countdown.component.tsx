import React from 'react';
import styled from 'styled-components/native';

import {colors} from '../../theme/colors';
import {fontSizes} from '../../theme/fonts';

const CountdownText = styled.Text`
    color: ${colors.text.primary};
    font-size: ${fontSizes.h1};
`;

const getMinutesFromSeconds = (s: number): string => {
    const minutes = Math.floor((s / 60) % 60);
    return minutes < 10 ? `0${minutes}` : minutes.toString();
};

const getRemainingSeconds = (s: number): string => {
    const seconds = Math.floor(s % 60);
    return seconds < 10 ? `0${seconds}` : seconds.toString();
};

interface CountdownProps {
    type: 'FLOW' | 'BREAK' | 'LONG_BREAK';
    durations: number;
    isPaused: boolean;
    onEnd: () => void;
}

const Countdown: React.FC<CountdownProps> = ({
    type,
    isPaused,
    durations,
    onEnd
}) => {
    const interval = React.useRef<ReturnType<typeof setInterval>>(null);
    const [currentSec, setCurrentSec] = React.useState(durations);

    const updateCurrentSec = () => {
        setCurrentSec(currentSec => {
            if (currentSec === 0) {
                clearInterval(interval.current);
                return currentSec;
            }
            return currentSec - 1;
        });
    };

    React.useEffect(() => {
        if (currentSec === 0) onEnd();
    }, [currentSec]);

    React.useEffect(() => {
        setCurrentSec(durations);
    }, [type, durations]);

    React.useEffect(() => {
        if (isPaused) clearInterval(interval.current);
        else interval.current = setInterval(updateCurrentSec, 1000);
        return () => clearInterval(interval.current);
    });

    return (
        <CountdownText>
            {`${getMinutesFromSeconds(currentSec)}:${getRemainingSeconds(
                currentSec
            )}`}
        </CountdownText>
    );
};

export default Countdown;
