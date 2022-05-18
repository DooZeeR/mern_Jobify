import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage.js'
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg'


const Error = () => {
    return (
        <Wrapper>
            <div>
                <img src={img} alt='not-found' />
                <h3>Page Not Found</h3>
                <p>We can't seem to find page you're looking for</p>
                <Link to='/landing'>back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error