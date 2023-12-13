import React, { useEffect, useState } from 'react';
import { MugWrapper, MugTop, MugInside, MugBottom, MugCoffee, MugHandle } from './CoffeeMug.style';
import { useSpring } from 'react-spring';

type CoffeeMugProps = {
  isStarted: boolean
  setIsAppeared: any
  isPouring: boolean
}

const CoffeeMug = ({ isStarted, setIsAppeared, isPouring }: CoffeeMugProps) => {

  const [isSlipped, setIsSlipped] = useState<boolean>(false);

  const mugAppearAnimation = useSpring({
    left: isStarted ? '50%' : '0',
    opacity: isStarted ? '100%' : '0%',
    config: { tension: 40, friction: 10 },
    onRest: () => {
      setIsSlipped(true);
    },
  });

  const mugZoomAnimation = useSpring({
    transform: isSlipped ? 'scale(2) translateX(-25%)' : 'scale(1) translateX(-50%)',
    bottom: isSlipped ? '2%' : '50%',
    config: { mass: 1, tension: 50, friction: 10 },
    onRest: () => {
      setIsAppeared(true);
    },
  });

  const coffeeRiseAnimation = useSpring({
    transform: isPouring ? 'translateY(10px)' : 'translateY(85px)',
    config: { mass: 4, tension: 50, friction: 80 },
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