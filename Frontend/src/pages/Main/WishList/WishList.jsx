import React from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { WishListContext } from '../../../context/WishListProvider'

function WishList() {
    const {wishlist,Wishlistadd}=useContext(WishListContext)
  return (
    <>
    <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    {
      wishlist.map((x)=>
      <div key={x._id} style={{border:"1px solid black"}}>
          <div onClick={()=>Wishlistadd(x)}><i class="fa-solid fa-heart"></i></div>
          
      <h1>Name:{x.name}</h1>
      <span><Link to={`/detail/${x._id}`}>Username:{x.username}</Link></span>
      <p>Age:{x.age}</p>
      </div>)
    }
    </>
  )
}

export default WishList