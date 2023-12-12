import { animated } from "react-spring";
import styled from "styled-components";

export const ButtonWrapper = styled(animated.div)`
  display: grid;
  place-items: center;
  position: absolute;
`
export const StyledButton = styled(animated.button)`
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  min-width: 170px;
  min-height: 50px;
  background: white;
  font-size: 1rem;
  transform: skew(25deg);
  position: absolute;
`
export const ButtonDepth = styled(animated.div)`
  border-radius: 20px;
  min-width: 170px;
  min-height: 50px;
  background: linear-gradient(90deg, rgba(235,235,235,1) 0%, rgba(180,180,180,1) 100%);
  transform: skew(25deg);
  position: absolute;
  top: -18px;
  right: -78px;
`

