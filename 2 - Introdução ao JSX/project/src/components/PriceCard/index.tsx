import React from 'react'
import './styles.css'

interface IPriceCard {
    plan: String,
    price?: Number,
    websites?: Number,
    hosting: Number,
    support: String
}

export default function PriceCard(props: IPriceCard) {
    return (
        <div className='price-card'>
            <p className="plan">{props.plan}</p>
            <p className="price">{props.price ? `$${props.price}` : 'Free'}{props.price ? <span>/month</span> : ''}</p>
            <div className="details">
                <p className="websites font-mulish">{props.websites ? props.websites : 'Unlimited'} Website</p>
                <p className="hosting font-mulish">{props.hosting} GB Hosting</p>
                <p className="websites font-mulish">{props.support} Support</p>
            </div>
            <button id='btn-price' className="btn-price">Get Started</button>
        </div>
    )
}
