import React, { useEffect, useState } from "react";
import comment from "../../assets/comment.png";
import axios from "axios";

function CardComponent({ data, coment }) {
  const [commentCount, setCommentCount] = useState([]);
  async function fetching() {
    try {
      const res = await axios(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`);
      setCommentCount(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className=" xl:w-full 2xl:w-3/4  text-zinc-500 rounded-xl h-28 m-auto mt-4 flex justify-start items-center px-4 gap-4 ">
      <h1 className=" text-2xl font-bold text-zinc-800 mr-4">Abit</h1>

      <div className=" flex flex-col w-full h-full px-2">
        <p className=" h-3/4 truncate flex-wrap w-5/6 py-4 ">{data.body}</p>
        <div className=" flex justify-start items-center gap-4 mt-4 mb-2">
          <button onClick={(body) => coment(body)}>
            <img width={20} src={comment} />
          </button>
          <button>
            <p className=" font-semibold text-blue-400">{commentCount.length}</p>
          </button>
          <button onClick={(body) => coment(body)}>
            <p className=" font-semibold text-blue-400">Detail</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CardComponent);
