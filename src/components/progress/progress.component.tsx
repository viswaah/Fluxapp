import React from 'react';

import {
    Finished,
    ProgressContainer,
    Running,
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
                    if (idx + 1 < currentFlow) return <Finished key={idx} />;
                    if (idx + 1 === currentFlow && !isBreak && !isCompleted)
                        return <Running key={idx} />;
                    return <Unfinished key={idx} />;
                })}
        </ProgressContainer>
    );
};

export default Progress;
