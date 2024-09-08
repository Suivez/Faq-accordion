import React from 'react'
import Question from './Question.js';
import starImage from '../images/icon-star.svg';

function Accordion() {
    return (
        <div className='w-[600px] p-7 bg-white rounded-xl m-10 sm:m-0'>
            <div className='w-full flex gap-5'>
                <img src={starImage} alt='Star'/>
                <h1 className='text-6xl font-bold m-0 text-darkPurple'>FAQs</h1>
            </div>
            <div className='divide-solid divide-y divide-gray-200'>
                <Question question={"question1"} answer={"answer1"}/>
                <Question question={"question2"} answer={"answer2"}/>
                <Question question={"question3"} answer={"answer3"}/>
                <Question question={"question3"} answer={"answer3"}/>
            </div>
        </div>
    )
}

export default Accordion
