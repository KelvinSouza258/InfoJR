import React from 'react'
import PriceCard from '../PriceCard'
import './styles.css'

export default function PricingSection() {
    return (
        <div className='price-section'>
            <div className="content">
                <h3 className="price-title">Get the right plan for future product.</h3>
                <div className="switch">
                    <div className='purple'>Yearly</div>
                    <div>Monthly</div>
                </div>
            </div>
            <div className='price-cards'>
                <PriceCard plan='Starter' websites={1} hosting={5} support='Limited' />
                <PriceCard plan='Premium' price={29} websites={10} hosting={15} support='Premium' />
                <PriceCard plan='Enterprise' price={49} hosting={50} support='Premium' />
            </div>
        </div>
    )
}
