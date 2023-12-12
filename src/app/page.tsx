'use client'
import { CoffeeMug } from "@/components/CoffeeMug"
import { Kettle } from "@/components/Kettle";
import { PlayButton } from "@/components/PlayButton";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Background = styled.div`
    background: #e9ba81;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
`

export default function Home() {

  const [isAppeared, setIsAppeared] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isPlayClicked, setIsPlayClicked] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setIsStarted(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlayClicked(prevState => !prevState);
  }

  return (
    <Background>
      <Kettle/>
      {isAppeared ? <PlayButton name="☕ Get Started 👀" onClickHandler={handlePlayClick}/> : <></>}
      <CoffeeMug isStarted={isStarted} setIsAppeared={setIsAppeared}/>
    </Background>
  )
}
