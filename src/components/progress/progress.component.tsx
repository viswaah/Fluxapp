/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
    Finished,
    ProgressContainer,
    ProgressLine,
    Running,
    SingleProgressItem,
    Unfinished
} from './progress.styles';

interface ProgressProps {
    flowCount: number;
    currentFlow: number;
    isBreak: boolean;
    isCompleted: boolean;
}

const Progress: React.FC<ProgressProps> = ({
    flowCount,
    currentFlow,
    isBreak,
    isCompleted
}) => {
    return (
        <ProgressContainer>
            {Array(flowCount)
                .fill(0)
                .map((elem, idx) => {
                    if (idx + 1 < currentFlow)
                        return (
                            <SingleProgressItem key={idx}>
                                {idx === 0 ? <></> : <ProgressLine />}
                                <Finished />
                            </SingleProgressItem>
                        );
                    if (idx + 1 === currentFlow && !isBreak && !isCompleted)
                        return (
                            <SingleProgressItem key={idx}>
                                {idx === 0 ? <></> : <ProgressLine />}
                                <Running />
                            </SingleProgressItem>
                        );
                    return (
                        <SingleProgressItem key={idx}>
                            {idx === 0 ? (
                                <></>
                            ) : (
                                <ProgressLine finished={false} />
                            )}
                            <Unfinished />
                        </SingleProgressItem>
                    );
                })}
        </ProgressContainer>
    );
};

export default Progress;
