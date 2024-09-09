import React from 'react'
import Question from './Question.js';
import starImage from '../images/icon-star.svg';

function Accordion() {
    const dataQuestions = [
        {
            question: "What is Frontend Mentor, and how will it help me?",
            answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                all levels and ideal for portfolio building.`,
        },
        {
            question: "Is Frontend Mentor free?",
            answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                    option providing access to a range of projects suitable for all skill levels.`,
        },
        {
            question: "Can I use Frontend Mentor projects in my portfolio?",
            answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                    way to showcase your skills to potential employers!`,
        },
        {
            question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                    channel where you can ask questions and seek support from other community members. `,
        }
    ]

    return (
        <div className='w-[600px] p-10 bg-white rounded-xl m-5 my-10 sm:m-0 shadow-2xl'>
            <div className='w-full flex gap-5 mb-5'>
                <img src={starImage} alt='Star' />
                <h1 className='text-6xl font-bold m-0 text-darkPurple'>FAQs</h1>
            </div>
            <div className='divide-solid divide-y divide-gray-200'>
                {dataQuestions.map((e) => {
                    return (
                        <Question question={e.question} answer={e.answer} />
                    )
                })}
            </div>
        </div>
    )
}

export default Accordion
