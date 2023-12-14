'use client'
import { CoffeeMug } from "@/components/CoffeeMug"
import { Kettle } from "@/components/Kettle";
import { PlayButton } from "@/components/PlayButton";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from 'next/image'
import { Table } from "@/components/Table";

const Background = styled.div`
  background: inherit;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`
const Logo = styled(Image)`
  position: fixed;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
  filter: invert();
`

export default function Home() {

  const [isMugSlide, setIsMugSlide] = useState<boolean>(false);
  const [isAppeared, setIsAppeared] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isPlayClicked, setIsPlayClicked] = useState<boolean>(false);
  const [isPouring, setIsPouring] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const sleep = setTimeout(() => {
      setIsStarted(true);
    }, 1000);
    return () => clearTimeout(sleep);

  }, []);

  const handlePlayClick = () => {
    setIsPlayClicked(prevState => !prevState);
  }

  return (
    <Background>
      <Table isMugSlide={isMugSlide}/>
      {isAppeared ? <PlayButton name="☕ Coffee time 👀" onClickHandler={handlePlayClick} /> : <></>}
      {isPlayClicked ? <Kettle setIsPouring={setIsPouring} /> : <></>}
      <CoffeeMug 
        isStarted={isStarted}
        setIsAppeared={setIsAppeared}
        isPouring={isPouring} 
        setIsMugSlide={setIsMugSlide}
        isMugSlide={isMugSlide}
      />
      <a href="https://github.com/Samucl/coffee-mug">
        <Logo src="/images/GitHub.png" alt="GitHub" width={30} height={30} />
      </a>
    </Background>
  )
}
