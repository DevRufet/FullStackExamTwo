import React from 'react'
import { Link } from 'react-router-dom'

function MainNavbar() {
  return (
      <>
      <Link to={'/'}>Home</Link>
  <Link to={'/basket'}>Basket</Link>
  <Link to={'/wishlist'}>Wishlist</Link> 
      </>
  )
}

export default MainNavbar