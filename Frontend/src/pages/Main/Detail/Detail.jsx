import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom'

function Detail() {
    let {id}=useParams()
    const [datas, setdatas] = useState({});
  useEffect(() => {
    datalar();
  }, [datas]);
  async function Getuser(id) {
    const response = await fetch("http://localhost:3000/users/" + id);
    const data = await response.json();
    return data;
  }
  async function datalar() {
    let datam = await Getuser(id);
    setdatas(datam);
  }
  return (
    <>
    <Helmet>
        <title>Detail</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     {
     
      <div key={datas._id} style={{border:"1px solid black"}}>
      <h1>Name:{datas.name}</h1>
      <span>Usernae:{datas.username}</span>
      <p>Age:{datas.age}</p>
      </div>
    }
    
    </>
  )
}

export default Detail