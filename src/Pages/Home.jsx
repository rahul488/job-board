import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import useInfinitescroll from "../hooks/useInfinitescroll";
import useFetch from "../hooks/useFetch";
import { BASE_URL, FILTER_TYPES } from "../Util/constants";
import Jobs from "../Components/Jobs";
import { useSelector } from "react-redux";

function Home() {
  const [jobList, setJobList] = useState([]);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const { fetchData, loading } = useFetch();
  const [jobCount, setJobCount] = useState(0);
  const filterData = useSelector((store) => store.filters);
  const { setFetching } = useInfinitescroll(page, totalPage, loadMore);

  useEffect(() => {
    handleFilteredData();
  }, [filterData]);

  async function loadMore(currPage) {
    try {
      const data = await fetchData("POST", BASE_URL, {
        limit: 10,
        offset: currPage,
      });
      let pages =
        Math.floor(data?.totalCount / 10) +
        (data?.totalCount % 10 == 0 ? 0 : 1);
      setTotalPage(pages);
      setFetching(false);
      setJobCount(data?.totalCount);
      setJobList((prev) => [...prev, ...(data?.jdList || [])]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  }

  function handleFilteredData() {
    let filterJobs = [];
    jobList.forEach((job) => {
      let isJobExist = true;
      filterData.forEach((currFilter) => {
        if (
          currFilter.type === FILTER_TYPES.roles &&
          !currFilter.value.includes(job?.jobRole.toLocaleLowerCase())
        ) {
          isJobExist = false;
        } else if (
          currFilter.type === FILTER_TYPES.experience &&
          job?.minExp < currFilter.value
        ) {
          isJobExist = false;
        } else if (
          currFilter.type === FILTER_TYPES.minBasePay &&
          !currFilter.value >= job?.minJdSalary &&
          !currFilter.value <= job?.maxJdSalary
        ) {
          isJobExist = false;
        }
      });
      if (isJobExist) {
        filterJobs.push(job);
      }
    });
    setFilteredJobs(filterJobs);
  }

  return (
    <Box sx={{ margin: "20px " }}>
      <Filter jobCount={filterData.length ? filterJobs.length : jobCount} />
      <Jobs
        jobList={filterData.length ? filterJobs : jobList}
        loading={loading}
      />
    </Box>
  );
}

export default Home;
