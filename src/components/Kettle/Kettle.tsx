import { useEffect, useState } from "react";
import { KettleBottom, KettleHandle, KettleLid, KettleLidHandle, KettleSpout, KettleTop, KettleWrapper } from "./Kettle.styles";
import { useSpring } from "react-spring";

type KettleProps = {
    setIsPouring: any
}

const Kettle = ({ setIsPouring }: KettleProps) => {

    const [isAnimationStart, setIsAnimationStart] = useState<boolean>(false);
    const [isPouringStart, setIsPouringStart] = useState<boolean>(false);
    const [isReset, setIsReset] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const sleep = setTimeout(() => {
            setIsAnimationStart(true);
        }, 1000);
        return () => clearTimeout(sleep);

    }, []);

    const kettleAppearAnimation = useSpring({
        opacity: isAnimationStart ? 1 : 0,

        transform: isAnimationStart ?
            'scale(1.6) rotate(-50deg) translate(60%, 10%)' :
            'scale(1.2) rotate(-50deg) translate(100%, 100%)',

        config: { mass: 1, tension: 40, friction: 10 },
        onRest: () => {
            setIsReset(true);
            setIsPouring(true);
            setIsPouringStart(true);
        },
    });

    const kettlePouringAnimation = useSpring({

        transform: isPouringStart ?
            'scale(1.6) rotate(-90deg) translate(60%, 10%)' :
            'scale(1.6) rotate(-50deg) translate(60%, 10%)',

        config: { mass: 1, tension: 40, friction: 30 },
        onRest: () => {
            setIsPouringStart(false);
        },
    });

    const kettle = (animation: any) => {
        return (
            <KettleWrapper style={{ ...animation }}>
                <KettleLidHandle />
                <KettleLid />
                <KettleSpout />
                <KettleHandle />
                <KettleTop />
                <KettleBottom />
            </KettleWrapper>
        );
    }

    return (

        <div>
            {isReset ?
                kettle(kettlePouringAnimation)
                :
                kettle(kettleAppearAnimation)
            }
        </div>
    )
};

export default Kettle;