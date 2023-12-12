import styled, { keyframes } from "styled-components";
import { animated } from 'react-spring';

export const MugWrapper = styled(animated.div)`
    display: grid;
    place-items: center;
    position: relative;
    top: 0;
`

export const MugTop = styled(animated.div)`
    background: white;
    width: 160px;
    height: 100px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    z-index: 1;
    overflow: hidden;
`

export const MugInside = styled(animated.div)`
    background: linear-gradient(90deg, rgba(166,166,166,1) 0%, rgba(255,255,255,1) 100%);
    width: 145px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
`

export const MugCoffee = styled(animated.div)`
    background: linear-gradient(124deg, rgba(65,48,24,1) 0%, rgba(89,65,32,1) 44%);
    width: 145px;
    height: 85px;
    border-radius: 50%;
    transform: translateY(85px);
`

export const MugBottom = styled(animated.div)`
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(230,230,230,1) 100%);
    width: 160px;
    height: 200px;
    border-radius: 0 0 40% 40%; 
    transform: translateY(-50px);
`
export const MugHandle = styled.div`
    border: 20px solid rgba(230,230,230,1);
    width: 50%;
    height: 100px;
    border-left: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-radius: 50%;
    transform: rotate(40deg) translateX(44px) translateY(-55px);
    position: absolute;
`