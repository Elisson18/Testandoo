import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = 20; 
    const digitCount = 9; 

    const updateCounter = () => {
        setCounter((prevCounter) => prevCounter + increment);
    };

    useEffect(() => {
        const interval = setInterval(updateCounter, 5000);
        return () => clearInterval(interval);
    }, []);

    const digits = counter.toString().padStart(digitCount, '0').split('');

    return (
        <div className="counter-container">
            {digits.map((digit, index) => (
                <div className="digit" key={index}>
                    <span>{digit}</span>
                </div>
            ))}
        </div>
    );
};

export default Counter;
