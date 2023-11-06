import { useState, useCallback } from "react";

const min = 1;
const max = 6;

const Die = (props: { onRoll: (newValue: number) => void }) => {
    const [value, setNumber] = useState(1);

    const randomValue = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(randomNumber>3){
            props.onRoll(randomNumber)
        }
        setNumber(randomNumber);
    }, [props.onRoll]);

    return (
        <div onClick={randomValue}>
            {value}
        </div>
    );
};

export default Die;
