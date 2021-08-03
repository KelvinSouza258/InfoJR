import React from 'react'
import logo1 from '../../assets/logos/logo1.svg'
import logo2 from '../../assets/logos/logo2.svg'
import logo3 from '../../assets/logos/logo3.svg'
import logo4 from '../../assets/logos/logo4.svg'
import logo5 from '../../assets/logos/logo5.svg'
import './styles.css'

export default function Logos() {
    return (
        <div className="logos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
        </div>
    )
}
