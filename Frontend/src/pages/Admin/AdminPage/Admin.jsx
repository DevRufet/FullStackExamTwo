import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Admin.scss'
function Admin() {
    const [datas, setdatas] = useState([])
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
      async function RemoveUser(id) {
        const response = await fetch('http://localhost:3000/users/'+id,{method:'delete'});
           datalar()
      }
  return (
   <>
   <Helmet>
   <title>Admin</title>
   <link rel="canonical" href="https://www.tacobell.com/" />
 </Helmet>
   <table>
  <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Age</th>
    <th>Edit</th>
    <th>Remove</th>
  </tr>
  {

   datas.map((x)=>
    <tr key={x._id}>
    <td>{x.name}</td>
    <td>{x.surname}</td>
    <td>{x.age}</td>
    <td><button><Link to={`/admin/update/${x._id}`}>Edit</Link></button></td>
    <td><button onClick={()=>RemoveUser(x._id)}>Remove</button></td>
  </tr>
   )

  }
 
  
</table>
   
   </>
  )
}

export default Admin