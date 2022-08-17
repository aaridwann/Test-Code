import React, { Suspense, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Navbar from "../../Components/Navbar/Index";
import Loading from '../../Components/Loading'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CardComponent = React.lazy(() => import('../../Components/Card'))
const PaginationComponent = React.lazy(() => import('../../Components/Pagination'))
const SearchInput = React.lazy(() => import('../../Components/SearchInput'))


function Dashboard() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataFind, setDataFind] = useState([]);
  const dataPart = useMemo(() => data.slice(page - 1, page + 2));
  const navigate = useNavigate();
  async function fetching() {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setData(res.data.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  }

  const settingPage = useCallback((e) => {
    setPage(e);
  }, []);

  const plus = useCallback(() => {
    setPage(page + 1);
  }, []);

  useEffect(() => {
    document.title = "Dashboard";
    fetching();
  }, []);

  const detailComment = (e) => {
    navigate(`/detail-comment${e.id}`);
  };
  const Search = useCallback(
    (e) => {
      const reg = new RegExp(e, "ig");
      const res = data.filter((x) => x.body.match(reg));
      setDataFind(res);
    },
    [data]
  );
  return (
    <Navbar>
      <div className=" w-3/5 m-auto mt-20 mb-20">
        <Suspense fallback={<Loading />}>
          <SearchInput input={(e) => Search(e)} />
        </Suspense>
        {dataFind.length !== 0
          ? dataFind.map((data) =>
            <Suspense fallback={<Loading />}>
              <CardComponent coment={() => detailComment(data)} key={data.id} data={data} />
            </Suspense>
          )
          : dataPart.map((data) =>
            <Suspense fallback={<Loading />}>
              <CardComponent coment={() => detailComment(data)} key={data.id} data={data} />
            </Suspense>
          )}
        <Suspense fallback={<Loading />}>
          <PaginationComponent currentPage={page} page={(e) => settingPage(e)} dataLength={dataFind.length !== 0 ? dataFind.length : data.length} plus={() => plus()} minus={() => setPage(page - 1)} />
        </Suspense>
      </div>
    </Navbar>
  );
}

export default React.memo(Dashboard);
