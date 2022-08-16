import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Index";
import { AuthContext } from "../Context/AuthContext";
import Dashboard from "../Page/Dashboard";
import DetailComment from "../Page/DetailComment";
import Home from "../Page/Home/Index";
import Login from "../Page/Login/Index";
import Profile from "../Page/Profile/Index";

function Router() {
  const { auth } = useContext(AuthContext);
  return (
    <div className=" w-5/6 m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Login />} />
          {auth ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/detail-comment:id" element={<DetailComment />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(Router);
