import {Feather} from '@expo/vector-icons';
import {Audio} from 'expo-av';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import Countdown from '../../components/countdown/countdown.component';
import Progress from '../../components/progress/progress.component';
import {useAppSelector} from '../../redux';
import {FocusContainer, ResetButton, TypeText} from './focus.styles';

const Focus: React.FC = () => {
    const {
        FOCUS_MINUTES,
        FLOW_COUNT,
        LONG_BREAK_MINUTES,
        BREAK_MINUTES,
        START_BREAK_AUTOMATICALLY,
        START_FLOW_AUTOMATICALLY,
        METRONOME
    } = useAppSelector(state => state.settings);
    const soundRef = React.useRef<Audio.Sound>(null);
    const [type, setType] = React.useState<'FLOW' | 'BREAK' | 'LONG_BREAK'>(
        'FLOW'
    );
    const [status, setStatus] = React.useState<
        'PLAYING' | 'PAUSED' | 'COMPLETED'
    >('COMPLETED');
    const [durations, setDurations] = React.useState(FOCUS_MINUTES * 60);
    const [currentFlow, setCurrentFlow] = React.useState(1);

    const togglePaused = (completed = false) => {
        switch (status) {
            case 'PAUSED':
                setStatus('PLAYING');
                break;
            case 'PLAYING':
                completed ? setStatus('COMPLETED') : setStatus('PAUSED');
                break;
            case 'COMPLETED':
                setStatus('PLAYING');
                break;
        }
    };

    const onSessionTypeEnd = () => {
        switch (type) {
            case 'FLOW':
                if (currentFlow === FLOW_COUNT) setType('LONG_BREAK');
                else setType('BREAK');
                setCurrentFlow(currentFlow + 1);
                !START_BREAK_AUTOMATICALLY && setStatus('PAUSED');
                break;
            case 'BREAK':
                setType('FLOW');
                !START_FLOW_AUTOMATICALLY && setStatus('PAUSED');
                break;
            case 'LONG_BREAK':
                setCurrentFlow(1);
                setStatus('COMPLETED');
                setType('FLOW');
                break;
        }
    };

    const whilePlayingFn = async () => {
        if (METRONOME && status === 'PLAYING') {
            await soundRef.current.playAsync();
            await soundRef.current.replayAsync();
        }
    };

    React.useEffect(() => {
        (async () => {
            soundRef.current = new Audio.Sound();
            await soundRef.current.loadAsync(
                require('../../../assets/tick.wav')
            );
        })();
        return () => {
            (async () => {
                await soundRef.current.unloadAsync();
            })();
        };
    }, []);

    React.useEffect(() => {
        switch (type) {
            case 'BREAK':
                setDurations(BREAK_MINUTES * 60);
                break;
            case 'FLOW':
                setDurations(FOCUS_MINUTES * 60);
                break;
            case 'LONG_BREAK':
                setDurations(LONG_BREAK_MINUTES * 60);
                break;
        }
    }, [type, BREAK_MINUTES, FOCUS_MINUTES, BREAK_MINUTES]);

    return (
        <FocusContainer>
            <ResetButton
                onPress={() => {
                    setCurrentFlow(1);
                    setStatus('COMPLETED');
                    setType('FLOW');
                }}>
                <Feather name="rotate-ccw" size={24} color="black" />
            </ResetButton>
            <TypeText>{type}</TypeText>
            <Countdown
                durations={durations}
                isPaused={status === 'PAUSED' || status === 'COMPLETED'}
                type={type}
                onEnd={onSessionTypeEnd}
                onProgress={whilePlayingFn}
                isCompleted={status === 'COMPLETED'}
            />
            <Progress
                currentFlow={currentFlow}
                flowCount={FLOW_COUNT}
                isBreak={type === 'BREAK' || type === 'LONG_BREAK'}
                isCompleted={status === 'COMPLETED'}
            />
            <TouchableOpacity onPress={() => togglePaused()}>
                <Feather
                    name={status === 'PLAYING' ? 'pause' : 'play'}
                    style={{marginTop: 48}}
                    size={56}
                    color="black"
                />
            </TouchableOpacity>
        </FocusContainer>
    );
};

export default Focus;
