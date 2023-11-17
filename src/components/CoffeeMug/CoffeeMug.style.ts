import styled from "styled-components";

export const Background = styled.div`
    background-color: #d4a368;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`

export const MugWrapper = styled.div`
    //background-color: gold;
    display: grid;
    place-items: center;
    transform: scale(1);
`

export const MugTop = styled.div`
    background-color: white;
    width: 160px;
    height: 100px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    z-index: 1;
    overflow: hidden;
`

export const MugInside = styled.div`
    background: linear-gradient(90deg, rgba(166,166,166,1) 0%, rgba(255,255,255,1) 100%);
    width: 145px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
`

export const MugCoffee = styled.div`
    background: linear-gradient(124deg, rgba(65,48,24,1) 0%, rgba(89,65,32,1) 44%);
    width: 145px;
    height: 85px;
    border-radius: 50%;
    transform: translateY(15px);
`

export const MugBottom = styled.div`
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(230,230,230,1) 100%);
    width: 100%;
    height: 200px;
    border-radius: 0 0 30% 30%; 
    transform: translateY(-50px);
`
export const MugHandle = styled.div`
    border: 20px solid rgba(230,230,230,1);
    width: 50%;
    height: 100px;
    border-left: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-radius: 50%;
    transform: rotate(40deg) translateX(85px) translateY(-45px);
`