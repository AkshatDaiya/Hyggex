import React, { useState } from 'react'
import { MdLightbulbOutline, MdOutlineReplay } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { RiFullscreenLine } from "react-icons/ri";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function Carousel() {
    const buttons = ['Study', 'Quiz', 'Test', 'Game', 'Others']
    const [activeButton, setActiveButton] = useState(0)

    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    }

    return (
        <div className="carousel py-7">
            <h2 className='forColor md:text-4xl sm:text-2xl text-lg font-medium pb-7'>Relations and Functions ( Mathematics )</h2>

            {/*  */}

            <div className="carouselFile my-7">
                <ul className="flex items-center justify-center md:gap-10 gap-6">
                    {buttons.map((button, i) => (
                        <li key={i}>
                            <button
                                className={`${activeButton === i ? 'text-[#06286E] text-lg font-semibold py-2 border-b-2 border-[#06286E]' : 'text-[#696671]'}`}
                                onClick={() => handleButtonClick(i)}
                            >
                                {button}
                            </button>
                        </li>
                    ))}
                </ul>


                <div className="carouselImg flex items-center justify-center flex-col m-7">
                    <div className="img flex items-center justify-center w-[287px] sm:w-[500px] md:w-[712px] h-[393.19px] rounded-[42.51px] relative">
                        <MdLightbulbOutline className='absolute left-6 top-7 text-3xl text-white' />
                        <HiOutlineSpeakerWave className='absolute right-6 top-7 text-3xl text-white' />

                        <div className="math text-3xl text-white">
                            <span className='px-1'>9</span>
                            <span className='px-1'>+</span>
                            <span className='px-1'>6</span>
                            <span className='px-1'>+</span>
                            <span className='px-1'>7x</span>
                            <span className='px-1'>-</span>
                            <span className='px-1'>2x</span>
                            <span className='px-1'>-</span>
                            <span className='px-1'>3x</span>
                        </div>
                    </div>

                    <div className="controller md:w-full w-[287px] flex items-center justify-center my-6 md:gap-16 sm:gap-6 gap-3">
                        <MdOutlineReplay className='text-[#1d4ed8] text-3xl' />

                        <div className='L&R flex items-center md:gap-8 sm:gap-4 gap-2'>
                            <button className='forBG p-2 rounded-full text-white'><FaAngleLeft className='text-3xl' /></button>

                            <span className='text-2xl font-medium'>01/10</span>

                            <button className='forBG p-2 rounded-full text-white'><FaAngleRight className='text-3xl' /></button>
                        </div>

                        <RiFullscreenLine className='text-[#1d4ed8] text-3xl' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Carousel
