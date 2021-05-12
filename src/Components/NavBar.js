import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    return (
        
        <div>
            <nav>
                <Link to='/'>
                    <img className='pokeball' src='https://pngimg.com/uploads/pokeball/pokeball_PNG21.png' alt='pokeball' />
                </Link> {' '}
                <Link to='/pokemon'>Pokemon</Link> {' '}
                <Link to='/locations'>Locations</Link> {' '}
                <Link to='/berries'>Berries</Link>
            </nav>
        </div>
    )
}
