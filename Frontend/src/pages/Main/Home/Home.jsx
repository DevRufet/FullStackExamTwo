import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MainContext } from '../../../context/MainProvider';
import { WishListContext } from '../../../context/WishListProvider';

function Home() {
    const {add,basket}=useContext(MainContext)
    const {Wishlistadd,isexistwish}=useContext(WishListContext)
    const [datas, setdatas] = useState([])
    const [myinp, setmyinp] = useState("")
    useEffect(() => {
     datalar()
    }, [])
    
    async function Getuser() {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        return data;
      }
      async function datalar() {
          let datam=await Getuser()
          setdatas(datam)
      }
      function az(item){
       setdatas( datas.toSorted((a,b) => (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0)))
      }
      function za(item){
        setdatas( datas.toSorted((a,b) => (a[item] < b[item]) ? 1 : ((b[item] < a[item]) ? -1 : 0)))
       }
  return (
    <>
    <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <input value={myinp} onChange={(e)=>setmyinp(e.target.value)}></input>
    <br />
    <button onClick={()=>az("age")}>A-z</button>
    <br />
    <button onClick={()=>za("age")}>Z-a</button>
    {
       datas.filter((x)=>x.name.toLowerCase().includes(myinp.toLowerCase()))
      .map((x)=>
      <div key={x._id} style={{border:"1px solid black"}}>
          <div onClick={()=>Wishlistadd(x)}>{isexistwish(x)?<i class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>}</div>
          
      <h1>Name:{x.name}</h1>
      <span><Link to={`/detail/${x._id}`}>Usernae:{x.username}</Link></span>
      <p>Age:{x.age}</p>
      <button onClick={()=>add(x)}>Add Basket</button>
      </div>)    }
    
    
    </>
  )
}

export default Home