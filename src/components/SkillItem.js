import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export const SkillItem = (props) => {
    return (
        <div className='item'>
            <CircularProgressbar value={props.item.percent} text={`${props.item.percent}%`} />
            <h5>{props.item.title}</h5>
        </div>
    )
}
