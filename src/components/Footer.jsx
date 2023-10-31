import React from 'react'
import '../style/Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Hem</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#om'>Om</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#tjanster'>Tjanster</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#priser'>Priser</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#kontakt'>Kontakt</a>
                    </li>
                </ul>
                <div className= 'socials'>

                </div>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2021 De Bergen All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer