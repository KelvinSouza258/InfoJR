import React from 'react'
import './styles.css'

interface ICard {
    image: any, 
    title: string,
    content: string
}

export default function Card(props: ICard) {
    return (
        <div className='card'>
            <img src={props.image} alt='' />
            <h3 className='card-title'>{props.title}</h3>
            <p className='card-text font-mulish'>{props.content}</p>
        </div>
    )
}
