import React, { useEffect } from 'react';
import { CreateSlider, autoInit } from 'butter-slider';

const SliderComponent = () => {
    useEffect(() => {
        autoInit();

        const mySlider = new CreateSlider({
            container: ".slider",
            slider: ".slides",
            getScrollPercent: (e) => {
                const bar = document.querySelector(".bar");
                bar.style.width = `${e}%`;
            },
            dragSpeed: 1.5,
            smoothAmount: 0.2,
            hasTouchEvent: true
        });
    }, []);

    return (
        <div className="app">
            <h1>With React</h1>
            <div className="slider">
                <div className="slides">
                    {/* Your slides go here */}
                </div>
            </div>
            <div className="progress">
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default SliderComponent;
