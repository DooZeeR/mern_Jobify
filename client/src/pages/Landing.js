import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage.js'
import {Logo} from '../components'



const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/*info*/}
                <div className='info'>
                    <h1>job <span>tracking</span> app</h1>
                    <p>I'm baby hoodie pop-up hell of cred flannel vape photo booth, brooklyn tonx hammock cliche. Sriracha next level chartreuse yr tbh etsy quinoa glossier palo santo migas. Artisan mumblecore mlkshk vegan, tacos crucifix cold-pressed roof party man bun 3 wolf moon. Selfies 8-bit pug, hella truffaut distillery etsy williamsburg.                   
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt='job hunt' className='img main-img'/>
            </div>
        </Wrapper>
    )
}



export default Landing