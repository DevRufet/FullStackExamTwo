import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/Main/MainLayout/MainLayout";
import Home from "./pages/Main/Home/Home";
import Detail from "./pages/Main/Detail/Detail";
import Basket from "./pages/Main/Basket/Basket";
import WishList from "./pages/Main/WishList/WishList";
import AdminLayout from "./pages/Admin/AdminLayout/AdminLayout";
import Admin from "./pages/Admin/AdminPage/Admin";
import AdminAdd from "./pages/Admin/AdminAdd/AdminAdd";
import AdminUpdate from "./pages/Admin/AdminUpdate/AdminUpdate";
import MainProvider from "./context/MainProvider";
import WishListProvider from "./context/WishListProvider";
function App() {
  return (
    <>
    <WishListProvider>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/wishlist" element={<WishList />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="/admin/add" element={<AdminAdd />} />
              <Route path="/admin/update/:id" element={<AdminUpdate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainProvider>
      </WishListProvider>
    </>
  );
}

export default App;
