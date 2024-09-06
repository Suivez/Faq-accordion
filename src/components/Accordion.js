import React from 'react'
import Question from './Question.js';

function Accordion() {
    return (
        <div className='flex w-500px'>
            <Question question={"question1"} answer={"answer"}/>
        </div>
    )
}

export default Accordion
