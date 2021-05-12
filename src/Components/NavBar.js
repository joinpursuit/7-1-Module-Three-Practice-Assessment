import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
   return (
		<div>
         <Link to='/'>
			<img style={{height: '50px', width: '50px'}}
				src='https://www.pngitem.com/pimgs/m/483-4839853_pokeballs-pokemon-master-ball-png-transparent-png.png'
				alt='master pokeball'
			/>
         </Link>
         <Link to='/pokemon'>Pokemon</Link>{' '}
         <Link to='/locations'>Locations</Link>{' '}
         <Link to='/berries'>Berries</Link>
		</div>
	)
}

export default NavBar
