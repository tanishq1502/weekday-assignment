import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/actions/actionCreators";

import {
  Container,
  Box,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";

import { EMPLOYEES, EXPERIENCE, JOB_TYPE, ROLE, SALARY } from "../assets/data";

import JobListingCard from "../components/JobListingCard";
import Filters from "../components/Filter";

import { useIntersectionObserver } from "../utils/useIntersectionObserver";

function Home() {
  const limit = 9;
  const [offset, setOffset] = useState(0);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [filters, setFilters] = useState([]);

  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.GetJobData?.data?.jdList);

  const getJobCards = () => {
    return Array.isArray(jobData) ? (
      jobData.length ? (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {jobData.map((jd, index) => (
            <Grid item key={`${jd.jdUid}_${index}`} xs={12} md={5} lg={4}>
              <JobListingCard data={jd} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          sx={{
            typography: "body1",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          No jobs found
        </Typography>
      )
    ) : null;
  };

  useEffect(() => {
    const body = {
      limit: 9,
      offset: 0,
    };

    setLoading(true);
    dispatch(actionCreators.getJobData(body,filters))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err) {
          setError(true);
        }
      });
  }, [dispatch,filters]);

  const { targetRef, isIntersecting } = useIntersectionObserver({}, []);

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      setOffset(offset + limit);
      const body = {
        limit: 9,
        offset: offset + limit,
      };
      dispatch(actionCreators.getJobData(body,filters));
    }
  }, [isIntersecting,filters]);

  return (
    <Container
      maxWidth={false}
      sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Grid
        container
        columnGap={2}
        rowGap={0}
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Grid xs={12} sm={5} md={2} item>
          <Filters
            data={ROLE}
            label="Roles"
            value={filters}
            setValue={setFilters}
          />
        </Grid>
        {/* <Grid xs={12} md={5} lg={2} item>
          <Filters
            data={EMPLOYEES}
            label="No Of Employees"
            value={filters}
            setValue={setFilters}
          />
        </Grid> */}
        <Grid xs={12} sm={5} md={2} item>
          <Filters
            data={EXPERIENCE}
            label="Experience"
            value={filters}
            setValue={setFilters}
          />
        </Grid>
        <Grid xs={12} sm={5} md={2} item>
          <Filters
            data={JOB_TYPE}
            label="Job Type"
            value={filters}
            setValue={setFilters}
          />
        </Grid>
        <Grid xs={12} sm={5} md={2} item>
          <Filters
            data={SALARY}
            label="Minimum Base Pay Salary"
            value={filters}
            setValue={setFilters}
          />
        </Grid>
      </Grid>
      {isError ? (
        <Typography
          sx={{
            typography: "body1",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Failed to fetch.
        </Typography>
      ) : isLoading && !jobData?.length ? (
        <Box sx={{ margin: "auto", width: "max-content" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            gap: "2rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {getJobCards()}
        </Box>
      )}
      {jobData?.length && (
        <Box ref={targetRef} sx={{ padding: "3rem" }}>
          <Typography
            sx={{
              typography: "body1",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Fetching more jobs...
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default Home;
