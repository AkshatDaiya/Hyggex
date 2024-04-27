import React from 'react'
import { Link } from 'react-router-dom';
import { GrHomeRounded } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";

function Breadcrumbs() {
    return (
        <div className="breadcrumbs py-5">
            <ul className='flex items-center sm:gap-1.5'>
                <li>
                    <Link to='#'>
                        <GrHomeRounded />
                    </Link>
                </li>
                <li>
                    <FaAngleRight className='text-[#06286E]' />
                </li>
                <li className='font-medium'><Link to='#'>Flashcard</Link></li>
                <li>
                    <FaAngleRight className='text-[#06286E]' />
                </li>
                <li className='font-medium'><Link to='#'>Mathematics</Link></li>
                <li>
                    <FaAngleRight className='text-[#06286E]' />
                </li>
                <li className='text-[#06286E] font-medium'>
                    <Link to='#'>
                        Relation and Function
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
