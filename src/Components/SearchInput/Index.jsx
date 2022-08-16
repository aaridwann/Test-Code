import React, { useEffect, useMemo, useRef, useState } from "react";
import search from "../../assets/search.png";
function SearchInput({ input }) {
  const [value, setValue] = useState("");
  const searchRef = useRef();
  useMemo(() => {
    input(value);
  }, [value]);

  useEffect(() => {
    searchRef.current.focus()
  },[]);
  return (
    <div
      className={`xl:w-full 2xl:w-3/4 h-10 ${
        value.length > 15 ? "border-red-500 border-2 rounded-full" : " border-0 border-transparent"
      } rounded-full bg-zinc-100  m-auto flex px-4 justify-between items-center duration-300 `}
    >
      <input
        ref={searchRef}
        onChange={(e) => setValue(e.target.value)}
        value={value.length > 15 ? value.slice(0, 15) : value}
        className={`text-zinc-400  font-semibold focus:outline-none w-5/6 m-auto ml-14 bg-transparent text-center`}
        placeholder="Search.."
      />
      <img className=" cursor-pointer" alt="search" src={search} width={20} />
    </div>
  );
}

export default React.memo(SearchInput);
