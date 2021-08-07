import React from 'react'
import benchmarksImg from '../../assets/cards/Card.png'
import pricingImg from '../../assets/cards/Calculator.png'
import retention from '../../assets/cards/Camera.png'
import Card from '../Card'
import './styles.css'

export default function CardSection() {
    return (
        <div className='card-section'>
            <Card image={benchmarksImg} title='Benchmarks' content='See how you stack up against comparable companies in similar stages.' />
            <Card image={pricingImg} title='Pricing Audit' content='Benchmark the health of your monetization and pricing strategy.' />
            <Card image={retention} title='Retention Audit' content='Audit where revenue leakage exists and where you can increase retention.' />
        </div>
    )
}
