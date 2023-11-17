import React from 'react';
import { MugWrapper, Background, MugTop, MugInside, MugBottom, MugCoffee, MugHandle} from './CoffeeMug.style';

const CoffeeMug = () => {
  return (
    <Background>
      <MugWrapper>
        <MugTop>
          <MugInside>
            <MugCoffee/>
          </MugInside>
        </MugTop>
        <MugBottom>
          <MugHandle/>
        </MugBottom>
      </MugWrapper>
    </Background>
  )
};

export default CoffeeMug;