import React, { useState, useEffect, useRef } from 'react';
import '../../image-slider.css';


const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(null);
    const textRef = useRef(null);

    const goToPrevious = () => {
        setIsAnimating(true);
        setDirection('prev');
    };

    const goToNext = () => {
        setIsAnimating(true);
        setDirection('next');
    };

    useEffect(() => {
        if (isAnimating) {
            const text = textRef.current;
            text.addEventListener('animationend', handleSlideEnd);
            text.classList.add('slide-down');
        }
    }, [isAnimating, direction]);

    const handleSlideEnd = () => {
        const text = textRef.current;
        text.classList.remove('slide-down');
        text.removeEventListener('animationend', handleSlideEnd);

        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            text.classList.add('slide-up');
        } else {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            text.classList.add('slide-up');
        }

        text.addEventListener('animationend', handleSlideUpEnd);
    };

    const handleSlideUpEnd = () => {
        const text = textRef.current;
        text.classList.remove('slide-up', 'slide-down');
        text.removeEventListener('animationend', handleSlideUpEnd);
        setIsAnimating(false);
    };
    return (
        <div className='flex flex-row items-center gap-10 px-10'>
            <div className='flex flex-col h-full gap-3 '>
                <div ref={textRef}>
                    <h1 className='Inder text-[18px]'>Portfolio <span className='Inder text-[18px]'>{currentIndex + 1}/{images.length}</span></h1>
                    <h1 className='InknutAntiqua w-[240px] font-bold text-[50px] line-clamp-2'>{title[currentIndex]}</h1>
                </div>
                <div className='flex gap-1'>
                    <button onClick={goToPrevious}><img className='w-[80px]' src='/images/kiri.png' /> </button>
                    <button onClick={goToNext}><img className='w-[80px]' src='/images/kanan.png' /></button>
                </div>
            </div>
            <img className='w-[940px] h-[480px] float-right' src={`/images/${images[currentIndex]}`} alt={`Carousel Image ${currentIndex}`} />
        </div>
    );
};

export default ImageCarousel;