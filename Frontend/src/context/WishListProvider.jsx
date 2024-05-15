import React, { useState } from 'react'
import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const WishListContext=createContext()
function WishListProvider({children}) {
    const [wishlist, setwishlist] =useLocalStorage("wishlist",[])
    function Wishlistadd(item){
     const index=wishlist.findIndex((x)=>x._id===item._id)
     if(index!==-1)
        setwishlist(wishlist.filter((x)=>x._id!==item._id))
     else{
         setwishlist([...wishlist,{...item}])
     }
    }
    function isexistwish(item){
        return wishlist.findIndex((x)=>x._id===item._id)!==-1
    }
  return (
    <>
    <WishListContext.Provider value={{wishlist , Wishlistadd,isexistwish}}>


{children}

    </WishListContext.Provider>
    
    
    </>
  )
}

export default WishListProvider