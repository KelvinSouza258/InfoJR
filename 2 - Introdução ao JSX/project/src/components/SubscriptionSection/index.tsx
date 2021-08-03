import React from 'react';
import image from '../../assets/subscriptionImg.png';
import Article from '../Article';
import './styles.css'

const title = "Subscription index";
const content = "A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."

export default function SubscriptionSection() {
    return (
        <div className="subs-section">
            <img src={image} alt="" />
            <Article title={title} content={content} />
        </div>
    )
}
