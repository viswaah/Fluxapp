import React from 'react';
import { Text } from 'react-native';

interface CountdownProps {
	seconds: number;
	paused: boolean;
	onEnd: () => void;
}

const getMinutesFromSeconds = (s: number): string => {
	const minutes = Math.floor((s / 60) % 60);
	return minutes < 10 ? `0${minutes}` : minutes.toString();
};

const getRemainingSeconds = (s: number): string => {
	const seconds = Math.floor(s % 60);
	return seconds < 10 ? `0${seconds}` : seconds.toString();
};

const Countdown: React.FC<CountdownProps> = ({ seconds, paused, onEnd }) => {
	const interval = React.useRef<ReturnType<typeof setInterval>>(null);
	const [currentSec, setcurrentSec] = React.useState(seconds);

	const updatecurrentSec = () => {
		setcurrentSec((currentSec) => {
			if (currentSec === 0) {
				clearInterval(interval.current);
				return currentSec;
			}
			return currentSec - 1;
		});
	};

	React.useEffect(() => {
		if (currentSec === 0) {
			onEnd();
		}
	}, [currentSec]);

	React.useEffect(() => {
		setcurrentSec(seconds);
	}, [seconds]);

	React.useEffect(() => {
		if (paused) {
			clearInterval(interval.current);
		} else {
			interval.current = setInterval(updatecurrentSec, 1000);
		}
		return () => clearInterval(interval.current);
	}, [paused, seconds]);

	return (
		<Text>
			{getMinutesFromSeconds(currentSec)}:{getRemainingSeconds(currentSec)}
		</Text>
	);
};

export default Countdown;
