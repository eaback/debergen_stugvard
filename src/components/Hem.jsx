import React from 'react'
import '../style/Hem.css'
import desktopImage from '../components/images/desktop.jpeg'
import mobileImage from '../components/images/mobile.jpeg'

const Hem = () => {
    const imageUrl = window.innerwidth >=768 ? desktopImage : mobileImage;


    return(
        <div className='hem_container'>
            <div className='welcome-container'>
                    <h3>Välkommen till </h3>
                    <h2>
                        De Bergen
                    </h2>
                    <p>Din Partner i Ljungdalens Fjällvärld</p>
                {/* <div>
                    <div className='text_box'>
                    Välkommen till De Bergen, din förtrogna partner för stugvärdstjänster, 
                    städning och snöskottning i det pittoreska Ljungdalen. Vi är stolta över
                    att erbjuda skräddarsydda tjänster som gör din vistelse i fjällen bekväm
                    och minnesvärd.
                    </div>
                </div> */}
            </div>
           
        </div>
    )
}



export default Hem