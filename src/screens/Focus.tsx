import React from 'react';
import { Text, Button } from 'react-native';

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
	const [paused, setPaused] = React.useState(false);
	const [currentSession, setCurrentSession] = React.useState(0);
	const [status, setStatus] = React.useState<Status>(Status.focus);
	const [seconds, setSeconds] = React.useState(FOCUS_MINUTES * 60);

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
				setCurrentSession(currentSession + 1);
				setSeconds(FOCUS_MINUTES * 60);
				break;
			case Status.break:
				setSeconds(BREAK_MINUTES * 60);
				break;
			case Status.longBreak:
				setSeconds(LONG_BREAK_MINUTES * 60);
				break;
		}
		if (PAUSED_SESSION) setPaused(true);
	}, [status]);

	return (
		<>
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
