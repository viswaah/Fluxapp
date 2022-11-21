import React from "react";
import { Feather } from "@expo/vector-icons";

import Countdown from "../../components/countdown/countdown.component";
import Progress from "../../components/progress/progress.component";
import { TypeText } from "./focus.styles";
import { sizes } from "../../theme/sizes";
import { TouchableOpacity } from "react-native";

const FOCUS_MINUTES = 0.05;
const BREAK_MINUTES = 0.05;
const LONG_BREAK_MINUTES = 0.05;
const FLOW_COUNT = 4;

// mark this true to have pause after each focus or break
const PAUSED_SESSION = false;

const Focus: React.FC = () => {
  const [type, setType] = React.useState<"FLOW" | "BREAK" | "LONG_BREAK">(
    "FLOW"
  );
  const [status, setStatus] = React.useState<
    "PLAYING" | "PAUSED" | "COMPLETED"
  >("PAUSED");
  const [durations, setDurations] = React.useState(FOCUS_MINUTES * 60);
  const [currentFlow, setCurrentFlow] = React.useState(1);

  const togglePaused = (completed = false) => {
    switch (status) {
      case "PAUSED":
        setStatus("PLAYING");
        break;
      case "PLAYING":
        completed ? setStatus("COMPLETED") : setStatus("PAUSED");
        break;
      case "COMPLETED":
        setStatus("PLAYING");
        break;
    }
  };

  const onSessionTypeEnd = () => {
    switch (type) {
      case "FLOW":
        if (currentFlow === FLOW_COUNT) setType("LONG_BREAK");
        else setType("BREAK");
        setCurrentFlow(currentFlow + 1);
        PAUSED_SESSION && setStatus("PAUSED");
        break;
      case "BREAK":
        setType("FLOW");
        PAUSED_SESSION && setStatus("PAUSED");
        break;
      case "LONG_BREAK":
        setCurrentFlow(1);
        setStatus("COMPLETED");
        setType("FLOW");
        break;
    }
  };

  React.useEffect(() => {
    switch (type) {
      case "BREAK":
        setDurations(BREAK_MINUTES * 60);
        break;
      case "FLOW":
        setDurations(FOCUS_MINUTES * 60);
        break;
      case "LONG_BREAK":
        setDurations(LONG_BREAK_MINUTES * 60);
        break;
    }
  }, [type]);

  return (
    <>
      <TypeText>{type}</TypeText>
      <Countdown
        durations={durations}
        isPaused={status === "PAUSED" || status === "COMPLETED"}
        type={type}
        onEnd={onSessionTypeEnd}
      />
      <Progress
        currentFlow={currentFlow}
        flowCount={FLOW_COUNT}
        isBreak={type === "BREAK" || type === "LONG_BREAK"}
        isCompleted={status === "COMPLETED"}
      />
      <TouchableOpacity onPress={() => togglePaused()}>
        <Feather
          name={status === "PLAYING" ? "pause" : "play"}
          style={{ marginTop: 48 }}
          size={56}
          color="black"
        />
      </TouchableOpacity>
    </>
  );
};

export default Focus;
