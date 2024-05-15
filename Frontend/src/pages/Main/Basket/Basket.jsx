import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainContext } from '../../../context/MainProvider'

function Basket() {
    const {basket,add,decrease,Gettotal,removeBasket}=useContext(MainContext)
    
  return (
    <>
    <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {
    basket.map((x)=>
    <div key={x._id} style={{border:"1px solid black"}}>
    <p>{x.count}</p>
    <h1>Name:{x.name}</h1>
    <span>Usernae:{x.username}</span>
    <p>Age:{x.age}</p>
    <button onClick={()=>removeBasket(x)}>Remove</button>
    <button onClick={()=>add(x)}>+</button>
    <button onClick={()=>decrease(x)}>-</button>
    </div>
    
    )
      }
    <p>total:{Gettotal()}</p>
    </>
  )
}

export default Basket