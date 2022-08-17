import React, { Suspense, useCallback, useContext, useEffect, useRef, useState } from "react";
// import AppsModal from "../../Components/Modal/AppsModal";
const AppsModal = React.lazy(() => import('../../Components/Modal/AppsModal'))
import { AuthContext } from "../../Context/AuthContext";
import { LoginFunction } from "../../Helper/Login.js";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";

function Login() {
  const navigate = useNavigate();

  const userRef = useRef();
  const pwdRef = useRef();
  const { auth, setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    userRef.current.focus();
    document.title = 'Login Page';
  }, []);

  // ==== Close Modal ====
  const closeModal = useCallback(() => {
    setModal(false);
  }, []);

  // === Submit ===
  async function submit(e) {
    e.preventDefault();
    await LoginFunction(setAuth, setMessage, userRef.current.value);
    setModal(true);
  }

  useEffect(() => {
    if (auth) {
      setTimeout(() => {
        setModal(false);
        navigate("/dashboard");
      }, 2000);
    }
  }, [auth]);

  return (
    <div className=" w-full min-h-screen flex justify-center items-center ">
      <Suspense fallback={<Loading />}>
        <AppsModal on={modal} close={closeModal} message={message} state={message == "success" ? true : false} />
      </Suspense>
      <form onSubmit={submit}>
        <div className=" w-60 h-80 flex flex-col justify-start items-center gap-6">
          <h1 className=" text-zinc-700 font-bold text-2xl mb-8">Login Page</h1>
          <input
            required
            minLength={4}
            ref={userRef}
            placeholder="Username"
            className="hover:border-blue-500 duration-700 focus:outline-none focus:border-sky-500 border-blue-200 text-zinc-600 border-2 text-center min-w-full h-8 rounded-3xl"
            type={"text"}
          />
          <input
            required
            ref={pwdRef}
            placeholder="password"
            className=" hover:border-blue-500 duration-700 focus:outline-none focus:border-sky-500 border-blue-200 text-zinc-600 border-2 text-center min-w-full h-8 rounded-3xl"
            type={"password"}
          />
          <button type="submit" className=" hover:bg-blue-500 duration-1000 text-white font-bold w-full h-8 bg-blue-200 rounded-2xl">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default React.memo(Login);
