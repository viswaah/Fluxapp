import styled from "styled-components/native";
import { fontSizes } from "../../theme/fonts";
import { spaces } from "../../theme/spaces";

export const TypeText = styled.Text`
  font-size: ${fontSizes.h3};
  padding-bottom: ${spaces[1]};
  text-transform: capitalize;
`;
