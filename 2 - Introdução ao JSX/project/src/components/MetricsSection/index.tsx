import React from 'react'
import Article from '../Article'
import image from '../../assets/metricsImg.png'
import './styles.css'

const title = 'In-depth metrics'
const content = 'Accurate, real-time reporting at your fingertips. Getting data has never been easier.'

export default function MetricsSection() {
    return (
        <div className="metrics-container">
            <Article title={title} content={content} />
            <img src={image} alt="graphic metrics" />
        </div>
    )
}
