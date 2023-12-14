import { animated } from "react-spring";
import styled from "styled-components";

export const KettleWrapper = styled(animated.div)`
   position: absolute;
   bottom: 250px;
   z-index: 1;
`
export const KettleLid = styled(animated.div)`
    width: 280px;
    border-radius: 100% 100% 0 0;
    height: 60px;
    background-color: white;
    border-bottom: 10px solid lightgrey;
`
export const KettleTop = styled(animated.div)`
    background: linear-gradient(259deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 100%);
    border-bottom: 100px solid white;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    height: 0;
    transform: translateX(-25px);
    width: 280px;
`
export const KettleBottom = styled(animated.div)`
    width: 330px;
    height: 300px;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(226,226,226,1) 100%);
    transform: translateX(-25px);
    border-radius: 0 0 10px 10px;
    background-color: white;
    border-bottom: 10px solid lightgrey;
`
export const KettleLidHandle = styled.div`
  background: gray;
  height: 30px;
  position: relative;
  width: 15px;
  transform: translateX(130px);

  &::after {
    background: darkgray;
    content: "";
    height: 10px;
    left: -30px;
    position: absolute;
    width: 80px;
    border-radius: 10px;
  }
`
export const KettleHandle = styled.div`
    border: 30px solid lightgrey;
    width: 300px;
    height: 150px;
    border-left: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-radius: 50%;
    transform: rotate(50deg) translateX(94px) translateY(-45px);
    position: absolute;
`
export const KettleSpout = styled(animated.div)`
    width: 0;
    height: 0;
    border-bottom: 100px solid lightgrey;
    border-right: 100px solid transparent;
    position: absolute;
    transform: rotate(70deg) translatey(40px);
`
export const Coffee = styled(animated.div)`
    width: 280px;
    height: 20px;

    background: linear-gradient(78deg, rgba(65,48,24,1) 0%, rgba(89,65,32,1) 61%, rgba(89,65,32,0.926923076923077) 88%, rgba(89,65,32,0) 95%); 

    position: absolute;
    transform: rotate(180deg) translateX(184px) translateY(-25px);
    z-index: -1;
`
