import { useState, useCallback } from "react";

const min = 1;
const max = 6;

const Die = () => {
    const [number, setNumber] = useState(1);

    const randomValue = useCallback(() => {
        const toto= Math.floor(Math.random() * (max - min + 1));
        setNumber(toto);
    }, []);

    return (
        <div onClick={randomValue}>
            {number}
        </div>
    );
};

export default Die;
