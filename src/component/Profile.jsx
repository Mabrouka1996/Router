import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <h2>Welcome to profile</h2>
      <nav>
        <Link to='/profile/settings'>Update profile</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Profile