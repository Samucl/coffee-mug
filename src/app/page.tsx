'use client'
import { CoffeeMug } from "@/components/CoffeeMug"
import { Kettle } from "@/components/Kettle";
import { PlayButton } from "@/components/PlayButton";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from 'next/image'
import { Table } from "@/components/Table";
import Hand from "@/components/Hand/Hand";

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
const MobileDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  background: #000000cf;
  color: white;
  font-size: 5vw;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 5;
`

export default function Home() {

  const [isMugSlide, setIsMugSlide] = useState<boolean>(false);
  const [isAppeared, setIsAppeared] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isPlayClicked, setIsPlayClicked] = useState<boolean>(false);
  const [isPouring, setIsPouring] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHandAppear, setIsHandAppear] = useState<boolean>(false);
  const [isHandMugDissapear, setIsHandMugDissapear] = useState<boolean>(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    document.body.style.overflow = 'hidden';
    const sleep = setTimeout(() => {
      setIsStarted(true);
    }, 1000);
    return () => {
      clearTimeout(sleep);
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  const handlePlayClick = () => {
    setIsPlayClicked(prevState => !prevState);
  }

  return (
    <Background>
      <Table isMugSlide={isMugSlide} />
      {isHandAppear ? <Hand
        isHandMugDissapear={isHandMugDissapear}
        setIsHandMugDissapear={setIsHandMugDissapear}
      /> : null}
      {isAppeared ? <PlayButton name="☕ Coffee time 👀" onClickHandler={handlePlayClick} /> : <></>}
      {isPlayClicked ? <Kettle setIsPouring={setIsPouring} setIsHandAppear={setIsHandAppear} isHandMugDissapear={isHandMugDissapear} /> : <></>}
      <CoffeeMug
        isStarted={isStarted}
        setIsAppeared={setIsAppeared}
        isPouring={isPouring}
        setIsMugSlide={setIsMugSlide}
        isMugSlide={isMugSlide}
        isHandMugDissapear={isHandMugDissapear}
      />
      <a href="https://github.com/Samucl/coffee-mug">
        <Logo src="/images/GitHub.png" alt="GitHub" width={30} height={30} />
      </a>
      {isMobile && <MobileDiv><p>Please view on desktop😔🙏</p></MobileDiv>}
    </Background>
  )
}
