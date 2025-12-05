import React from 'react'
import Button from './Button'
import { IoMdPerson, IoMdPlay } from 'react-icons/io'
import { FaUserPlus } from 'react-icons/fa'
import BlurText from "../Components/BlurText.jsx";

export default function PlayRandom() {
    return (
        <section>
            <div className="relative w-full h-[400px] overflow-hidden rounded-4xl">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover object-center"
                >
                    <source src="https://www.pexels.com/ru-ru/download/video/5359140/" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black-100/50" />

                <div className="relative z-10 p-10 text-white w-full h-full flex flex-col justify-between">

                    <div className='flex justify-between items-start'>
                        <h1>Artist</h1>
                        <span>
                            <h1>Monthly Listeners</h1>
                            <p className='flex items-center gap-1'><IoMdPerson />98. 086</p>
                        </span>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <div></div>

                        {/* <h1 className='text-7xl font-bold'>Top <br /> In Uzbekistan</h1> */}
                        <BlurText
                            text="Top In Uzbekistan"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-[100px] font-bold"
                        />

                        <div className='flex gap-2'>
                            <Button><IoMdPlay />Play</Button>
                            <Button><FaUserPlus />Follow</Button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
