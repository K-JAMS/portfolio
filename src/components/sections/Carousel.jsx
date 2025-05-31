import React, { useEffect, useState } from 'react'

export const Carousel = ({children: slides, autoSlide = false, autoSlideInterval = 5000}) => {
    const[curr,setCurr] = useState(0);

    const prev = () => 
        setCurr((curr => curr == 0 ? slides.length - 1 : curr - 1))
    const next = () => 
        setCurr((curr => curr == slides.length - 1 ? 0: curr + 1))
    useEffect(() => {
        if (!autoSlide)return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval])

  return (
    <div className = "overflow-hidden relative">
        <div className = "flex transition-transform ease-in-out duration-2000" style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
    </div>
  )
}
