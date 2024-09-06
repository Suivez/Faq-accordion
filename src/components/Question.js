import React from 'react'
import plusIcon from '../images/icon-plus.svg';

function Question({question, answer}) {
    return (
        <div className='flex-col bg-white w-[500px]'>
            <hr />
            <div className='flex-row justify-between w-full bg-red-500'>
                <h2 className='text-darkPurple font-bold p-0 m-0'>{question}</h2>
                <img src={plusIcon} alt='plus'/>
            </div>
        </div>
    )
}

export default Question
