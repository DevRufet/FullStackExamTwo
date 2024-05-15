import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavbar() {
  return (
  <>
  <Link to={'/admin'}>Admin</Link>
      <Link to={'/admin/add'}>AdminAdd</Link>
     
  
  </>
  )
}

export default AdminNavbar
