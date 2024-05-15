import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../AdminNavbar/AdminNavbar'

function AdminLayout() {
  return (
   <>
   <AdminNavbar></AdminNavbar>
   <Outlet></Outlet>
   
   </>
  )
}

export default AdminLayout