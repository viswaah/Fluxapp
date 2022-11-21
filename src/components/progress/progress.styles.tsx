import styled from "styled-components/native";
import { colors } from "../../theme/colors";
import { sizes } from "../../theme/sizes";
import { spaces } from "../../theme/spaces";

const circleSize = sizes[1];
const gapBetweenCircles = spaces[2];

const HalfFilled = styled.View`
  width: 5px;
  height: ${circleSize};
  background-color: ${colors.text.primary};
`;

const FullFilled = styled.View`
  width: ${circleSize};
  height: ${circleSize};
  background-color: ${colors.text.primary};
`;

export const ProgressContainer = styled.View`
  flex-direction: row;
  margin-right: -${gapBetweenCircles};
`;

export const Unfinished = styled.View`
  height: ${circleSize};
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  overflow: hidden;
  width: ${circleSize};
  border-radius: ${circleSize};
  border-style: solid;
  border-width: 3px;
  border-color: ${colors.text.primary};
  margin-right: ${gapBetweenCircles};
`;

export const Running = () => (
  <Unfinished>
    <HalfFilled />
  </Unfinished>
);

export const Finished = () => (
  <Unfinished>
    <FullFilled />
  </Unfinished>
);
