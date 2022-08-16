import React, { useContext, useEffect, useState } from "react";
import back from "../../assets/back.png";
import Navbar from "../../Components/Navbar/Index";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import AppsModal from "../../Components/Modal/AppsModal";

function Profile() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  console.log(auth)
  function logout() {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      window.localStorage.removeItem("user");
      setAuth(null);
      navigate("/");
    }, 2000);
  }

  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <Navbar>
      <AppsModal on={show} state={true} message={"Logout Success"} close={show} />
      <div className=" xl:w-2/4 2xl:w-2/3 h-48 mx-auto mt-10 flex flex-col justify-center items-center">
        <button onClick={() => navigate(-1)} className=" self-start self place-self-start ">
          <img className=" hover:scale-105 duration-200" alt="back" src={back} width={20} />
        </button>

        <div className=" w-3/4 h-44 flex gap-4 justify-center items-center text-lg text-zinc-800">
          {/* Left */}
          <div className=" flex flex-col">
            <p>username</p>
            <p>email</p>
            <p>address</p>
            <p>phone</p>
          </div>
          {/* Right */}
          <div className=" flex flex-col font-semibold">
            <p>: {auth?.name}</p>
            <p>: {auth.email}</p>
            <p>: {auth.address.street}{', '}{auth.address.city}</p>
            <p>: {auth.phone}</p>
          </div>
        </div>
        <button onClick={logout} className=" px-4 py-2 bg-blue-300 rounded-xl font-bold text-white">
          Logout
        </button>
      </div>
    </Navbar>
  );
}

export default Profile;
