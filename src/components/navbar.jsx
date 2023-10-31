import React, {useState} from 'react';
import '../style/navbar.css';

function Navbar() {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    
    const navToggle = () => {
        active === 'nav__menu' 
        ? setActive('nav__menu nav__active')
        : setActive('nav__menu');

        //ToggleIcon

        toggleIcon === 'nav__toggler'
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon('nav__toggler')
    };


     return (
        <nav className='nav'>
        <a href='#' className="nav__brand">De Bergen</a>
        <ul className={active}>
            <li className="nav_item">
                <a href='#' className='nav_link'>
                    Hem
                    </a>
                    </li>
            <li className="nav_item">
                <a href='#' className='nav_link'>
                    Om
                    </a>
                    </li>
            <li className="nav_item">
                <a href='#' className='nav_link'>
                    Tjänster
                    </a>
                    </li>
            <li className="nav_item">
                <a href='#' className='nav_link'>
                    Priser
                    </a>
                    </li>
            <li className="nav_item">
                <a href='#' className='nav_link'>
                    Contact
                    </a>
                    </li>
        </ul>
        <div onClick = {navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3 "></div>
        </div>
        
        </nav>
     )
}

export default Navbar