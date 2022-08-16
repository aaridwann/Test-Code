import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../Components/Navbar/Index";
import back from "../../assets/back.png";
import comment from "../../assets/comment.png";

function DetailComment() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [coment, setComent] = useState([]);
  const [show, setShow] = useState(false);
  const params = useParams();
  const { id } = params;

  async function fetchingDetails() {
    try {
      const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id} `);
      const comment = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments `);
      setData(res.data);
      setComent(comment.data);
    } catch (error) {
      console.log(error);
    }
  }

  function backPage() {
    if (!show) {
      return navigate(-1);
    } else {
      setShow(false);
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    }
  }

  useEffect(() => {
    document.title = "Details Post";
    fetchingDetails();
  }, [params]);

  return (
    <Navbar>
      <div className=" w-2/4 m-auto flex flex-col justify-center items-center 2xl:pl-56 mt-20 mb-20">
        {/* TOP */}
        <div className=" w-full flex flex-col justify-start px-4 py-2">
          <button onClick={backPage}>
            <img className=" hover:scale-105 duration-200" alt="back" src={back} width={20} />
          </button>
          <p className=" ml-20 xl:w-80 2xl:w-3/6 text-lg font-bold text-zinc-600 ">{data?.title}</p>
        </div>
        {/* === Body === */}
        <div className=" w-full flex flex-col justify-start px-4 py-2">
          <div className=" flex">
            <h1 className=" font-bold text-2xl text-zinc-800 ">Rais</h1>
            <p className=" ml-8 w-80 text-sm font-bold text-zinc-600 ">{data?.body}</p>
          </div>
          <span className=" ml-20 mt-3 flex gap-2">
            <button onClick={() => setShow(!show)}>
              {show ? (
                <h1 className="hover:scale-105 duration-500 text-xl font-bold text-zinc-700">All Comment</h1>
              ) : (
                <img className="hover:scale-105 duration-200" alt="comment" src={comment} width={20} />
              )}
            </button>
            {!show && <p className=" font-semibold text-blue-400">{coment.length}</p>}
          </span>
        </div>

        {/* ==== Comment ==== */}

        <div style={{ heigth: "400px" }} className={`w-full duration-700 p-4`}>
          {coment.map((x, i) => (
            <div key={i} className={`flex gap-2 text-justify  ${show ? " h-40 opacity-100 " : "h-0 opacity-0"} duration-700 pb-2`}>
              <h1 className={` break-words w-80 font-bold text-zinc-800`}>{x.email.split("@")[0].toString().split("_")[0].toString().split(".")[0]}</h1>
              <p className="">{data.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Navbar>
  );
}

export default React.memo(DetailComment);
