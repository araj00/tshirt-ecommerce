import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa'
import './socialsignin.css'
import { Link } from 'react-router-dom'

const SocialSignIn = () => {
    return (
        <>
            <Link to="#" className='social-icon'>
                <FaFacebookF />
            </Link>

            <Link to="#" className="social-icon">
                <FaTwitter />
            </Link>
            <Link to="#" className="social-icon">
                <FaGoogle />
            </Link>
            <Link to="#" className="social-icon">
                <FaLinkedinIn />
            </Link>
        </>
    )
}

export default SocialSignIn