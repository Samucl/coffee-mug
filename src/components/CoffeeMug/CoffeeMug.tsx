import React, { useEffect, useState } from 'react';
import { MugWrapper, MugTop, MugInside, MugBottom, MugCoffee, MugHandle } from './CoffeeMug.style';
import { useSpring } from 'react-spring';

type CoffeeMugProps = {
  isStarted: boolean
  setIsAppeared: any
}

const CoffeeMug = ({ isStarted, setIsAppeared }: CoffeeMugProps) => {

  const [isSlipped, setIsSlipped] = useState<boolean>(false);

  const mugAppearAnimation = useSpring({
    left: isStarted ? '0%' : '20vw',
    opacity: isStarted ? '100%' : '0%',
    config: { tension: 40, friction: 10 },
    onRest: () => {
      setIsSlipped(true);
    },
  });

  const mugZoomAnimation = useSpring({
    transform: isSlipped ? 'scale(2)' : 'scale(1)',
    top: isSlipped ? '40%' : '0',
    config: { mass: 1, tension: 50, friction: 10 },
    onRest: () => {
      setIsAppeared(true);
    },
  });

  return (
    <MugWrapper style={{ ...mugAppearAnimation, ...mugZoomAnimation}}>
      <MugTop style={{}}>
        <MugInside style={{}}>
          <MugCoffee style={{}}/>
        </MugInside>
      </MugTop>
      <MugBottom>
      </MugBottom>
      <MugHandle />
    </MugWrapper>
  )
};

export default CoffeeMug;