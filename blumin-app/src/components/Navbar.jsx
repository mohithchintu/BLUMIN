import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link to='/'>Logo</Link>
            <Link to='/about'>About</Link>
            <Link to='/academia'>Academia</Link>
            <Link to='/industry'>Industry</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/projects'>Projects</Link>
        </nav>
    )
}

export default Navbar
