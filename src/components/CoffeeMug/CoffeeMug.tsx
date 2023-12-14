import React, { useEffect, useState } from 'react';
import { MugWrapper, MugTop, MugInside, MugBottom, MugCoffee, MugHandle } from './CoffeeMug.style';
import { useSpring } from 'react-spring';

type CoffeeMugProps = {
  isStarted: boolean
  setIsAppeared: any
  isPouring: boolean
  setIsMugSlide: any
  isMugSlide: boolean
}

const CoffeeMug = ({ isStarted, setIsAppeared, isPouring, setIsMugSlide, isMugSlide }: CoffeeMugProps) => {

  const mugAppearAnimation = useSpring({
    left: isStarted ? '50%' : '0',
    opacity: isStarted ? '100%' : '0%',
    config: { tension: 40, friction: 10 },
    onRest: () => {
      setIsMugSlide(true);
    },
  });

  const mugZoomAnimation = useSpring({
    transform: isMugSlide ? 'scale(2) translateX(-25%)' : 'scale(1) translateX(-50%)',
    bottom: isMugSlide ? '2%' : '50%',
    config: { mass: 1, tension: 50, friction: 10 },
    onRest: () => {
      setIsAppeared(true);
    },
  });

  const coffeeRiseAnimation = useSpring({
    transform: isPouring ? 'translateY(10px)' : 'translateY(87px)',
    config: { mass: 4, tension: 30, friction: 70 },
  });

  return (
    <MugWrapper style={{...mugAppearAnimation, ...mugZoomAnimation}}>
      <MugTop>
        <MugInside>
          <MugCoffee style={{...coffeeRiseAnimation}}/>
        </MugInside>
      </MugTop>
      <MugBottom>
      </MugBottom>
      <MugHandle />
    </MugWrapper>
  )
};

export default CoffeeMug;