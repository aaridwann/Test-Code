import React, { useEffect, useState } from "react";

function PaginationComponent({ currentPage, plus, minus, dataLength, page }) {
  const [count, setCount] = useState([]);

  function Pagination() {
    let res = [];
    for (let i = 0; i <= dataLength / 3; i++) {
      res.push(i);
    }
    return res;
  }
  useEffect(() => {
    setCount(Pagination());
  }, [dataLength]);
  return (
    <div className=" mb-20 mt-20 float-right flex gap-4 text-md font-bold text-zinc-600">
      {currentPage - 1 !== count[0] && (
        <button onClick={minus} className=" px-2  rounded-lg">
          Prev
        </button>
      )}
      {count.map((x, i) => (
        <button key={i} onClick={() => page(x + 1)}>
          <p className={`${currentPage - 1 == x ? ` border-b-2 ` : ` border-b-0`} border-blue-400 px-2  `}>{x + 1}</p>
        </button>
      ))}
      {currentPage - 1 !== count[count.length - 1] && (
        <button onClick={plus} className="  px-2  rounded-lg">
          Next
        </button>
      )}
    </div>
  );
}

export default React.memo(PaginationComponent);
