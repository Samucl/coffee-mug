import { useEffect, useState } from "react";
import { useSpring } from "react-spring";
import { StyledButton, ButtonDepth, ButtonWrapper } from "./PlayButton.styles";
import type { PlayButtonProps } from "./PlayButton.types";

const PlayButton = ({ name, onClickHandler }: PlayButtonProps) => {

  const [isClicked, setisClicked] = useState<boolean>(true);

  useEffect(() => {
    setisClicked(false);
  }, []);

  const buttonDissapearAnimation = useSpring({
    transform: isClicked ? 'scale(0)' : 'scale(1)',
    config: { mass: 1, tension: 140, friction: 10 },
    onRest: (event: any) => {
      onClickHandler(event);
    },
  });

  const handleOnClick = () => {
    setisClicked(true)
  }

  return (
    <ButtonWrapper style={buttonDissapearAnimation}>
      <ButtonDepth/>
      <StyledButton onClick={handleOnClick}>{name}</StyledButton>
    </ButtonWrapper>
  ) 
};

export default PlayButton;