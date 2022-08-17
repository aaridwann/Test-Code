import React, { Suspense, useEffect } from "react";
import avatar from "../../assets/avatar.png";
const NavbarHome = React.lazy(() => import('../../Components/NavbarHome'))
const Loading = React.lazy(() => import('../../Components/Loading'))


function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, [])
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <NavbarHome />
      </Suspense>
      <div className=" w-full h-screen flex justify-center ">
        <img alt="image" width={700} className="m-auto -mt-20 -z-10" src={avatar} />
      </div>
    </div>
  );
}

export default React.memo(Home);
