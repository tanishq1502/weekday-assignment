import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/actions/actionCreators";

import { Container, Box, Typography, CircularProgress } from "@mui/material";

import JobListingCard from "../components/JobListingCard";

function Home() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.GetJobData?.data?.jdList);

  useEffect(() => {
    const body = {
      limit: 9,
      offset: 0,
    };

    setLoading(true);
    dispatch(actionCreators.getJobData(body))
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err) {
          setError(true);
        }
      });
  }, [dispatch]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
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
          {Array.isArray(jobData) ? (
            jobData.length ? (
              jobData.map((jd) => <JobListingCard key={jd.jdUid} data={jd} />)
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
          ) : null}
        </Box>
      )}
    </Container>
  );
}

export default Home;
