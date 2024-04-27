import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

function FAQ() {
    const [faqBtn, setFaqBtn] = useState(false)
    const [faqBtn1, setFaqBtn1] = useState(false)
    const [faqBtn2, setFaqBtn2] = useState(false)

    return (
        <div className="FAQ my-32 mx-5">
            <h1 className='forColor text-5xl font-semibold'>FAQ</h1>

            <div className="dropdown w-3/4">
                <div className="DP1">
                    <div className={`DP1 border forBorder flex justify-between p-3 px-6 text-lg font-medium my-8 transition-all duration-300 ease-in-out ${faqBtn && 'mb-0'}`}>
                        <p>Can education flashcards be used for test preparation?</p>
                        <button onClick={() => setFaqBtn(!faqBtn)}><IoIosArrowDown className={`text-2xl transition-all duration-300 ease-out ${faqBtn ? 'rotate-180' : ''}`} /></button>

                    </div>
                    <div className={`text border forBorder p-3 px-6 text-lg mb-6 transition-all duration-300 ease-out ${!faqBtn && 'opacity-0 hidden'}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis quibusdam deserunt iure fugiat laudantium excepturi magnam autem et, sunt necessitatibus esse ratione consequatur facere adipisci officia, debitis voluptates dolorem.</p>
                    </div>
                </div>

                <div className="DP2">
                    <div className={`DP2 border forBorder flex justify-between p-3 px-6 text-lg font-medium my-8 transition-all duration-300 ease-in-out ${faqBtn1 && 'mb-0'}`}>
                        <p>Can education flashcards be used for test preparation?</p>
                        <button onClick={() => setFaqBtn1(!faqBtn1)}><IoIosArrowDown className={`text-2xl transition-all duration-300 ease-out ${faqBtn1 ? 'rotate-180' : ''}`} /></button>

                    </div>
                    <div className={`text border forBorder p-3 px-6 text-lg mb-6 transition-all duration-300 ease-out ${!faqBtn1 && 'opacity-0 hidden'}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis quibusdam deserunt iure fugiat laudantium excepturi magnam autem et, sunt necessitatibus esse ratione consequatur facere adipisci officia, debitis voluptates dolorem.</p>
                    </div>
                </div>

                <div className="DP3">
                    <div className={`DP3 border forBorder flex justify-between p-3 px-6 text-lg font-medium my-8 transition-all duration-300 ease-in-out ${faqBtn2 && 'mb-0'}`}>
                        <p>Can education flashcards be used for test preparation?</p>
                        <button onClick={() => setFaqBtn2(!faqBtn2)}><IoIosArrowDown className={`text-2xl transition-all duration-300 ease-out ${faqBtn2 ? 'rotate-180' : ''}`} /></button>

                    </div>
                    <div className={`text border forBorder p-3 px-6 text-lg mb-6 transition-all duration-300 ease-out ${!faqBtn2 && 'opacity-0 hidden'}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis quibusdam deserunt iure fugiat laudantium excepturi magnam autem et, sunt necessitatibus esse ratione consequatur facere adipisci officia, debitis voluptates dolorem.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FAQ
