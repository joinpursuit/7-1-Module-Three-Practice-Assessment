import { Link } from 'react-router-dom'
import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <Link to='/' ><img src='https://pm1.narvii.com/6718/25f449bb968d9c415ebd8b37198944ff259cff3a_hq.jpg' style={{ height: '50px', width: '50px' }} alt='pokeball' /></Link>
            <Link to='/pokemon'>Pokemon</Link> {' '}
            <Link to='/locations'>Locations</Link> {' '}
            <Link to='/berries'>Berries</Link>
        </nav>
    )

}

export default NavBar;