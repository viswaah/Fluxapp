import {MaterialIcons} from '@expo/vector-icons';
import {Audio} from 'expo-av';
import React from 'react';

import tick from '../../../assets/tick.wav';
import Countdown from '../../components/countdown/countdown.component';
import Progress from '../../components/progress/progress.component';
import SafeArea from '../../components/safe-area/safe-area.component';
import {updateSettings, useAppDispatch, useAppSelector} from '../../redux';
import {colors} from '../../theme/colors';
import {
    ControlsContainer,
    EditFocusButton,
    FocusContainer,
    FocusTitleContainer,
    FocusTitleInput,
    PrimaryControl,
    PrimaryControlText,
    SecondaryControl,
    TypeText
} from './focus.styles';

const Focus: React.FC = () => {
    const dispatch = useAppDispatch();
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

    const togglePaused = (completed = false): void => {
        switch (status) {
            case 'PAUSED':
                setStatus('PLAYING');
                break;
            case 'PLAYING':
                if (completed) setStatus('COMPLETED');
                else setStatus('PAUSED');
                break;
            default:
                setStatus('PLAYING');
                break;
        }
    };

    const onSessionTypeEnd = (): void => {
        switch (type) {
            case 'FLOW':
                if (currentFlow === FLOW_COUNT) setType('LONG_BREAK');
                else setType('BREAK');
                setCurrentFlow(currentFlow + 1);
                if (!START_BREAK_AUTOMATICALLY) setStatus('PAUSED');
                break;
            case 'BREAK':
                setType('FLOW');
                if (!START_FLOW_AUTOMATICALLY) setStatus('PAUSED');
                break;
            default:
                setCurrentFlow(1);
                setStatus('COMPLETED');
                setType('FLOW');
                break;
        }
    };

    const whilePlayingFn = async (): Promise<void> => {
        if (METRONOME && status === 'PLAYING') {
            await soundRef.current.playAsync();
            await soundRef.current.replayAsync();
        }
    };

    const mainControlText = (): string => {
        switch (status) {
            case 'COMPLETED':
                return 'Start';
            case 'PLAYING':
                return 'Pause';
            default:
                return 'Resume';
        }
    };

    const focusStatusText = (): string => {
        switch (type) {
            case 'FLOW':
                return 'Stay focussed!';
            case 'BREAK':
                return 'Take a break!';
            default:
                return 'You have made it!';
        }
    };

    React.useEffect(() => {
        (async () => {
            soundRef.current = new Audio.Sound();
            await soundRef.current.loadAsync(tick);
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
            default:
                setDurations(LONG_BREAK_MINUTES * 60);
                break;
        }
    }, [type, BREAK_MINUTES, FOCUS_MINUTES, LONG_BREAK_MINUTES]);

    return (
        <SafeArea>
            <FocusContainer>
                <FocusTitleContainer>
                    <FocusTitleInput placeholder="Enter focus name" />
                    <EditFocusButton>
                        <MaterialIcons
                            name="edit"
                            size={26}
                            color={colors.bg.secondary}
                        />
                    </EditFocusButton>
                </FocusTitleContainer>
                <TypeText>{focusStatusText()}</TypeText>
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
                <ControlsContainer>
                    <SecondaryControl
                        onPress={() => {
                            dispatch(
                                updateSettings({
                                    key: 'METRONOME',
                                    value: !METRONOME
                                })
                            );
                        }}>
                        <MaterialIcons
                            name={METRONOME ? 'music-off' : 'music-note'}
                            size={32}
                            color={colors.bg.secondary}
                        />
                    </SecondaryControl>
                    <PrimaryControl onPress={() => togglePaused()}>
                        <PrimaryControlText>
                            {mainControlText()}
                        </PrimaryControlText>
                    </PrimaryControl>
                    <SecondaryControl
                        onPress={() => {
                            setCurrentFlow(1);
                            setStatus('COMPLETED');
                            setType('FLOW');
                        }}>
                        <MaterialIcons
                            name="stop"
                            size={32}
                            color={colors.bg.secondary}
                        />
                    </SecondaryControl>
                </ControlsContainer>
            </FocusContainer>
        </SafeArea>
    );
};

export default Focus;
