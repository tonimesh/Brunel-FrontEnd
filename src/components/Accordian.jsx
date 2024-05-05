import React from 'react';
import { useState } from 'react';
import "./Accordian.css";

function Accordian() {
    const [selected,setSelected] = useState(null);
    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }
    return (
        <div className='accordian'>
            {data.map((item,i) =>(
                <div className="item">
                    <div className="accordian-title" onClick={()=>toggle(i)}>
                        <h2>{item.question}</h2>
                        <span className='toggleicon'>{selected === i ? '-' : '+'}</span>

                    </div>
                    <div className={selected === i ? 'show': 'content' }>
                        {item.answer}

                    </div>
                </div>
            ))}
        
        </div>
    )
}


const data = [
    {
        question: "Do you offer freelancers?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." ,
    },
    {
        question: "What’s the guarantee that I will be satisfied with the hired talent?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." ,
    },
    {
        question: "Can I hire multiple talents at once?",
        answer: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution." ,
    },
    {
        question: "Why should I not go to an agency directly?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." ,
    },
    {
        question: "Who can help me pick a right skillset and duration for me?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." ,

    }
]

export default Accordian

