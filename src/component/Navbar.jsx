import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
 return (
    <div>
        <nav style={{display:'flex' , justifyContent:'space-between'}}> 
            <Link to ='/' >Accueil</Link>
            <Link to ='/Blog' >Blog</Link>
            <Link to ='/profile' >Profile</Link>
        </nav>
    </div>
 )
}

export default Navbar