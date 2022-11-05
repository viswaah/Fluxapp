import React from "react";
import { Text } from "react-native";
import { Audio } from "expo-av";

interface CountdownProps {
  status: number;
  seconds: number;
  paused: boolean;
  soundOn: boolean;
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

const Countdown: React.FC<CountdownProps> = ({
  seconds,
  status,
  paused,
  soundOn,
  onEnd,
}) => {
  const interval = React.useRef<ReturnType<typeof setInterval>>(null);
  const soundRef = React.useRef<Audio.SoundObject>(null);
  const [currentSec, setCurrentSec] = React.useState(seconds);

  const updateCurrentSec = () => {
    setCurrentSec((currentSec) => {
      if (currentSec === 0) {
        clearInterval(interval.current);
        return currentSec;
      }
      return currentSec - 1;
    });
  };

  React.useEffect(() => {
    const loadSound = async () => {
      soundRef.current = await Audio.Sound.createAsync(
        require("../../assets/tick.wav")
      );
    };
    loadSound();
  }, []);

  React.useEffect(() => {
    const playSound = async () => {
      if (soundOn && soundRef.current && currentSec !== seconds) {
        await soundRef.current.sound.playAsync();
        await soundRef.current.sound.replayAsync();
      }
    };
    playSound();
    if (currentSec === 0) {
      onEnd();
    }
  }, [currentSec]);

  React.useEffect(() => {
    setCurrentSec(seconds);
  }, [status, seconds]);

  React.useEffect(() => {
    if (soundRef.current) {
      soundRef.current.sound.stopAsync().then(() => {});
    }
  }, [soundOn]);

  React.useEffect(() => {
    if (paused) {
      if (soundRef.current) {
        soundRef.current.sound.stopAsync().then(() => {});
      }
      clearInterval(interval.current);
    } else {
      interval.current = setInterval(updateCurrentSec, 1000);
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
