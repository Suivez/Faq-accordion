import React from 'react'
import Question from './Question.js';
import starImage from '../images/icon-star.svg';

function Accordion() {
    return (
        <div className='flex-col w-500px'>
            <div className='w-full flex'>
                <img src={starImage} alt='Star'/>
                <h1>FAQs</h1>
            </div>
            <Question question={"question1"} answer={"answer"}/>
        </div>
    )
}

export default Accordion
