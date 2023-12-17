import { useEffect, useState } from "react";
import { Finger, FingerWrapper, HandWrapper, Knuckles, MiddlePhalanx, Palm, ProximalPhalanx, Thumb, Wrist } from "./Hand.styles";
import { useSpring } from "react-spring";

type HandProps = {
    isHandMugDissapear: boolean
    setIsHandMugDissapear: any
}

const Hand = ({isHandMugDissapear, setIsHandMugDissapear}: HandProps) => {

    const [isHandSlide, setIsHandSlide] = useState(false); 
    const [isHandOpen, setIsHandOpen] = useState(true);

    useEffect(() => {
        setIsHandSlide(true);
    }, []);

    const handSlideAnimation = useSpring({
        opacity: isHandSlide ? 1 : 0,
        zIndex: isHandSlide ? 1 : 0,
        transform: isHandSlide ? 'scale(0.7) translate(670px, 70px)' :
        'scale(0.5) translate(1670px, 70px)',
        config: { mass: 1, tension: 40, friction: 10 },
        onRest: () => {
            setIsHandOpen(false);
            setTimeout(() => {
                setIsHandMugDissapear(true);
              }, 1000);
        },
    });

    const handDissapearAnimation = useSpring({
        zIndex: isHandMugDissapear ? 1 : 1,
        opacity: isHandMugDissapear ? 0 : 1,
        transform: isHandMugDissapear ? 'scale(0.7) translate(1670px, 70px)' :
        'scale(0.7) translate(670px, 70px)',
        config: { mass: 2, tension: 40, friction: 20 },
    });

    const hand = (animation: any) => {
        return (
            <HandWrapper style={{...animation}}>
            {isHandOpen ?
                <FingerWrapper>
                    <Finger isHandOpen={isHandOpen} width="290px" borderBottom="solid black 1px"/>
                    <Finger isHandOpen={isHandOpen} width="340px" borderBottom="solid black 1px"/>
                    <Finger isHandOpen={isHandOpen} width="280px" borderBottom="solid black 1px"/>
                    <Finger isHandOpen={isHandOpen} width="190px" />
                </FingerWrapper>
                :
                <FingerWrapper>
                    <Finger borderBottom="solid black 1px"/>
                    <Finger borderBottom="solid black 1px"/>
                    <Finger borderBottom="solid black 1px"/>
                    <Finger/>
                </FingerWrapper>
            }
            <Thumb>
                <ProximalPhalanx />
                <MiddlePhalanx />
            </Thumb>
            <Knuckles />
            <Palm />
            <Wrist />
        </HandWrapper>
        );
    }

    return (
        <>
            {isHandMugDissapear ? hand(handDissapearAnimation) : hand(handSlideAnimation)}
        </>
    )
};

export default Hand;