import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useInfinitescroll(page, totalPage = 0, loadMore = () => {}) {
  const [fetching, setFetching] = useState(false);
  const filterData = useSelector((store) => store.filters);

  useEffect(() => {
    if (totalPage > 0 && page < totalPage && filterData.length <= 0) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [totalPage, fetching, page, filterData]);

  useEffect(() => {
    if (page == 0 && filterData.length <= 0) {
      loadMore(0);
    }
  }, [page, filterData]);

  function handleScroll() {
    if (
      page < totalPage &&
      !fetching &&
      Math.floor(window.innerHeight + document.documentElement.scrollTop) >=
        document.documentElement.scrollHeight
    ) {
      setFetching(true);
      loadMore(page + 1);
    }
  }

  return { setFetching };
}

export default useInfinitescroll;
