import React, { useState } from 'react'
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';

function Question({ question, answer }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex-col bg-white w-[500px] border-y-0 border-x-0'>
            <button onClick={() => setIsActive(!isActive)} className='flex justify-between w-full border-none bg-white'>
                <h2 className='text-darkPurple font-bold p-0 m-0'>{question}</h2>
                <img src={isActive ? minusIcon : plusIcon} alt='Plus' />
            </button>
            {
                <div className={`overflow-hidden transition-[max-height] duration-500 linear ${isActive ? "max-h-40" : 'max-h-0'}`}>
                    <p>{answer}</p>
                </div>
            }
        </div>
    )
}

export default Question
