import React from 'react';
import { Text, TextInput, Button, View } from 'react-native';

import Countdown from '../components/Countdown';

const FOCUS_MINUTES = 0.05;
const BREAK_MINUTES = 0.05;
const LONG_BREAK_MINUTES = 0.05;
const SESSION_COUNT = 4;

// mark this true to have pause after each focus or break
const PAUSED_SESSION = false;

const enum Status {
	focus,
	break,
	longBreak,
}

const getStatus = (status: Status): string => {
	switch (status) {
		case Status.break:
			return 'Break';
		case Status.focus:
			return 'Focus';
		case Status.longBreak:
			return 'Long Break';
	}
};

const Focus = () => {
	const [paused, setPaused] = React.useState(true);
	const [currentSession, setCurrentSession] = React.useState(0);
	const [status, setStatus] = React.useState<Status>(Status.focus);
	const [seconds, setSeconds] = React.useState(FOCUS_MINUTES * 60);
	const [focusSeconds, setFocusSeconds] = React.useState(FOCUS_MINUTES * 60);
	const [breakSeconds, setBreakSeconds] = React.useState(BREAK_MINUTES * 60);
	const [longBreakSeconds, setLongBreakSeconds] = React.useState(
		LONG_BREAK_MINUTES * 60
	);

	const updateStatus = () => {
		setStatus((currentStatus) => {
			switch (currentStatus) {
				case Status.focus:
					if (currentSession === SESSION_COUNT) {
						return Status.longBreak;
					}
					return Status.break;
				case Status.break:
					return Status.focus;
			}
		});
	};

	const resetFocus = () => {
		setPaused(true);
		setStatus(Status.focus);
		setCurrentSession(() => {
			if (status === Status.focus) return 1;
			else return 0;
		});
	};

	React.useEffect(() => {
		switch (status) {
			case Status.focus:
				setSeconds(focusSeconds);
				break;
			case Status.break:
				setSeconds(breakSeconds);
				break;
			case Status.longBreak:
				setSeconds(longBreakSeconds);
				break;
		}
	}, [status, focusSeconds, breakSeconds, longBreakSeconds]);

	React.useEffect(() => {
		if (status === Status.focus) setCurrentSession(currentSession + 1);
		if (PAUSED_SESSION) setPaused(true);
	}, [status]);

	return (
		<>
			<View>
				<Text>Focus time</Text>
				<TextInput
					onEndEditing={({ nativeEvent }) =>
						setFocusSeconds(parseFloat(nativeEvent.text) * 60)
					}
					keyboardType="numeric"
					returnKeyType="done"
					selectTextOnFocus={true}
					placeholder="minutes"
					defaultValue={`${FOCUS_MINUTES}`}
				/>
			</View>
			<View>
				<Text>Break time</Text>
				<TextInput
					onEndEditing={({ nativeEvent }) =>
						setBreakSeconds(parseFloat(nativeEvent.text) * 60)
					}
					keyboardType="numeric"
					returnKeyType="done"
					selectTextOnFocus={true}
					placeholder="minutes"
					defaultValue={`${BREAK_MINUTES}`}
				/>
			</View>
			<View>
				<Text>Long break time</Text>
				<TextInput
					onEndEditing={({ nativeEvent }) =>
						setLongBreakSeconds(parseFloat(nativeEvent.text) * 60)
					}
					keyboardType="numeric"
					returnKeyType="done"
					selectTextOnFocus={true}
					placeholder="minutes"
					defaultValue={`${LONG_BREAK_MINUTES}`}
				/>
			</View>

			<Button title="reset" onPress={resetFocus} />
			<Text>Session: {currentSession}</Text>
			<Text>{getStatus(status)}</Text>
			<Countdown
				status={status}
				seconds={seconds}
				paused={paused}
				onEnd={
					currentSession === 4 && status !== Status.focus
						? resetFocus
						: updateStatus
				}
			/>
			<Button
				title={paused ? 'resume' : 'pause'}
				onPress={() => setPaused(!paused)}
			/>
		</>
	);
};

export default Focus;
