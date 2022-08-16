import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarHome() {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex justify-between items-center mt-10">
      <h1 className=" text-4xl font-bold">Cinta Coding</h1>
      <button onClick={() => navigate("/login")} className=" bg-blue-300 w-28 h-10 rounded-3xl text-white font-bold ">
        Login
      </button>
    </div>
  );
}

export default React.memo(NavbarHome);
