import React, { useState } from 'react'
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';

function Question({ question, answer }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex-col bg-white w-full border-y-0 border-x-0 p-0'>
            <button onClick={() => setIsActive(!isActive)} className='flex justify-between items-center w-full border-none bg-white p-0 py-5'>
                <h2 className='text-darkPurple text-xl font-semibold p-0 m-0'>{question}</h2>
                <img src={isActive ? minusIcon : plusIcon} alt='Plus' />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-500 linear ${isActive ? "max-h-96" : 'max-h-0'}`}>
                <p className='m-0 pb-5 text-base text-grayishPurple font-normal'>{answer}</p>
            </div>
        </div>
    )
}

export default Question
