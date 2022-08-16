import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar({ children }) {
  const { auth } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className=" flex justify-between items-center h-20 px-10 relative">
        <h1 className=" text-3xl font-bold">Cinta Koding</h1>
        <h1 className=" text-xl font-bold text-zinc-500 w-20 text-center h-10 border-b-2 border-blue-300 bor">Post</h1>
        <span onClick={() => setShow(!show)} className=" cursor-pointer inline-flex text-xl gap-2 items-center max-w-md">
          <h1 className=" font-bold text-black text-2xl">Welcome,</h1>
          <h1 className=" w-10 font-bold text-blue-300 text-2xl"> {auth?.name ? auth.name : "Ridwan"}</h1>
        </span>
        <div className={`${show ? "opacity-100 right-0" : " right-96 opacity-0"} duration-500 w-40 h-16 bg-blue-400 absolute  mt-32 rounded-bl-full rounded-tr-full flex justify-center items-center`}>
          <h2 onClick={() => navigate("/profile")} className=" cursor-pointer text-white font-semibold italic">
            Detail Profile
          </h2>
        </div>
      </div>
      {children}
    </>
  );
}

export default React.memo(Navbar);
