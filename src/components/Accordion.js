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
            <div className='divide-solid divide-y divide-gray-200'>
                <Question question={"question1"} answer={"answer1"}/>
                <Question question={"question2"} answer={"answer2"}/>
                <Question question={"question3"} answer={"answer3"}/>
            </div>
        </div>
    )
}

export default Accordion
