import React from 'react'
import { FaPlus } from "react-icons/fa";

function Divider() {
    return (
        <div className="divider flex items-center justify-between mb-3">
            <div className="pubBy flex items-end">
                <div className="img rounded-full h-12 w-12 lg:flex md:flex hidden justify-center items-center mx-5" style={{ boxShadow: '0px 0px 42px 10px rgba(29,78,216,0.52)' }}>
                    <img src="../Clip.png" alt="Clip" className='w-8' />
                </div>
                <div className="details">
                    <small>Published by</small>
                    <img src="../Component40.png" alt="Component40" />
                </div>
            </div>

            <div className="CreateFC flex items-center">
                <button className='mx-3'>
                    <div className="plus lg:flex md:flex hidden items-center justify-center rounded-full h-12 w-12 forBG">
                        <FaPlus className='text-2xl text-white' />
                    </div>
                </button>

                <div className="flashC">
                    <h1 className='forColor text-2xl font-medium'>Create Flashcard</h1>
                </div>

            </div>
        </div>
    )
}

export default Divider
