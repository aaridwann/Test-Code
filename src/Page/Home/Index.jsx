import React, { useEffect } from "react";
import NavbarHome from "../../Components/NavbarHome";
import avatar from "../../assets/avatar.png";
function Home() {
  useEffect(() => {
    document.title = 'Home';
  },[])
  return (
    <div>
      <NavbarHome />
      <div className=" w-full h-screen flex justify-center ">
        <img alt="image" width={700} className="m-auto -mt-20 -z-10" src={avatar} />
      </div>
    </div>
  );
}

export default Home;
