import { animated } from "react-spring";
import styled from "styled-components";

interface FingerProps {
    width?: string;
    borderBottom?: string;
    isHandOpen?: boolean;
    zIndex?: number;
  }

export const HandWrapper = styled(animated.div)`
    display: inline-flex;
    position: absolute;
    align-items: center;
    bottom: 0;
    transform: scale(0.5) translate(1670px, 70px);
`

export const Wrist = styled(animated.div)`
    flex-wrap: nowrap;
    height: 250px;
    width: 1000px;
    background: linear-gradient(259deg, rgba(235,204,167,0) 0%, rgba(235,204,167,0.2007177871148459) 12%, rgba(235,204,167,1) 24%);
`

export const Palm = styled(animated.div)`
    flex-wrap: nowrap;
    height: 350px;
    width: 280px;
    border-radius: 58% 42% 74% 26% / 45% 42% 58% 55%;
    background-color: #ebcca7;
    transform: translateX(70px);
`

export const Knuckles = styled(animated.div)`
    flex-wrap: nowrap;
    height: 350px;
    width: 130px;
    background-color: #ebcca7;
    transform: translateX(175px) skew(-12deg);
`

export const Thumb = styled(animated.div)`
    z-index: 2;
` 
export const ProximalPhalanx = styled(animated.div)`
    width: 200px;
    height: 100px;
    background: linear-gradient(259deg, rgba(235,204,167,1) 0%, rgba(239,215,184,1) 44%);
    transform: translate(450px, -95px) rotate(30deg);
    border-radius: 50px;
` 
export const MiddlePhalanx = styled(animated.div)`
    width: 170px;
    height: 100px;
    background-color: #efd7b8;
    transform: translate(363px, -211px) rotate(-10deg);
    border-radius: 50px;
` 
export const FingerWrapper = styled(animated.div)`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    z-index: 2;
`

export const Finger = styled(animated.div)<FingerProps>`
    flex-wrap: nowrap;
    width: ${(props) => props.width || '240px'};
    height: 87px;
    background-color: #ebcca7;
    border-radius: ${(props) => (props.isHandOpen ? '50px 0 0 50px' : '50px')};
    transform: ${(props) => (props.isHandOpen ? 'translateX(396px)' : 'translateX(450px)')};
    justify-self: end;
    border-right: ${(props) => (props.isHandOpen ? 'none' : 'solid black 1px')};
    border-bottom: ${(props) => props.borderBottom || 'transparent'};
`