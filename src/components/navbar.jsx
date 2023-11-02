import { Link } from "react-router-dom";
import "../style/navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ContactPageIcon from '@mui/icons-material/ContactPage';

/*
1.Logo
2.HOME
3.Om
4.Tjänster
5.Kontakt
*/

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="nav-left">{/* Logo */}</div>

      <div className="nav-right">
        <Link to="/" className="nav-link">
          <HomeIcon className="nav-icon" />
          HOME
        </Link>
        <Link to="/om" className="nav-link">
          <InfoIcon className="nav-icon" />
          OM
        </Link>
        <Link to="/tjänster" className="nav-link">
          <LocalOfferIcon className="nav-icon" />
          TJÄNSTER
        </Link>
        <Link to="/kontakt" className="nav-link">
          <ContactPageIcon className="nav-icon" />
          KONTAKT
        </Link>

      </div>
    </div>
  );
}
export default Navbar;



// import React, {useState} from 'react';
// import '../style/navbar.css';

// function Navbar() {
//     const [active, setActive] = useState('nav__menu');
//     const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    
//     const navToggle = () => {
//         active === 'nav__menu' 
//         ? setActive('nav__menu nav__active')
//         : setActive('nav__menu');

//         //ToggleIcon

//         toggleIcon === 'nav__toggler'
//         ? setToggleIcon('nav__toggler toggle')
//         : setToggleIcon('nav__toggler')
//     };


//      return (
//         <nav className='nav'>
//         <a href='#' className="nav__brand">De Bergen</a>
//         <ul className={active}>
//             <li className="nav_item">
//                 <a href='#' className='nav_link'>
//                     Hem
//                     </a>
//                     </li>
//             <li className="nav_item">
//                 <a href='#' className='nav_link'>
//                     Om
//                     </a>
//                     </li>
//             <li className="nav_item">
//                 <a href='#' className='nav_link'>
//                     Tjänster
//                     </a>
//                     </li>
//             <li className="nav_item">
//                 <a href='#' className='nav_link'>
//                     Priser
//                     </a>
//                     </li>
//             <li className="nav_item">
//                 <a href='#' className='nav_link'>
//                     Contact
//                     </a>
//                     </li>
//         </ul>
//         <div onClick = {navToggle} className={toggleIcon}>
//             <div className="line1"></div>
//             <div className="line2"></div>
//             <div className="line3 "></div>
//         </div>
        
//         </nav>
//      )
// }

// export default Navbar