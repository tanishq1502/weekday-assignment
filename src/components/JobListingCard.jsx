/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";

import FaceImage1 from "/images/face_image_1.webp";
import FaceImage2 from "/images/face_image_2.webp";
import ImagePlaceholder from "/images/image_placeholder.png";

import { getHeightWidth } from "../utils/utilityFunctions";
import { useModalContext } from "../utils/ModalContext";
import ModalContentWrapper from "./ModalContentWrapper";

function JobListingCard({ data, mode = "default" }) {
  const modalContext = useModalContext();

  const handleViewJob = ({ data }) => {
    modalContext?.handleModalOpen();
    modalContext?.setComponent(
      <ModalContentWrapper
        heading="Job Description"
        handleModalClose={modalContext.handleModalClose}
        rootStyles={{ height: "60rem" }}
        contentStyles={{ padding: 0 }}
      >
        <JobListingCard data={data} mode="view" />
      </ModalContentWrapper>
    );
  };
  return (
    <Box
      sx={{
        width: "auto",
        boxShadow: 3,
        padding: "2rem",
        borderRadius: "2rem",
        height: "55rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform .2s",

        ...(mode === "view" && {
          boxShadow: "none",
          width: "100%",
          height: "100%",
          gap: "3rem",
          overflow: "auto",
        }),

        ...(mode === "default" && {
          "&:hover": {
            transform: "scale(1.025)",
          },
        }),
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Box
            sx={{
              ...getHeightWidth("lg"),
              bgcolor: "custom.grey_3",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            {data.logoUrl ? (
              <Box
                component="img"
                src={data.logoUrl}
                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <Box
                component="img"
                src={ImagePlaceholder}
                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}
          </Box>

          <Box>
            {data.companyName && (
              <Box sx={{ typography: "h4", textTransform: "capitalize" }}>
                {data.companyName}
              </Box>
            )}

            {data.jobRole && (
              <Box sx={{ typography: "body2", textTransform: "capitalize" }}>
                {data.jobRole}
              </Box>
            )}

            {data.location && (
              <Box
                sx={{ typography: "subtitle2", textTransform: "capitalize" }}
              >
                {data.location}
              </Box>
            )}
          </Box>
        </Box>

        {data.maxJdSalary || data.minJdSalary ? (
          <Box
            sx={{
              marginTop: "1rem",
              typography: "subtitle2",
              color: "custom.grey_2",
            }}
          >
            {data.maxJdSalary && data.minJdSalary ? (
              <Box>
                Estimated Salary: {data.minJdSalary}k - {data.maxJdSalary}k{" "}
                {data.salaryCurrencyCode} ✅
              </Box>
            ) : data.minJdSalary ? (
              <Box>
                Minimum Salary: {data.minJdSalary}k {data.salaryCurrencyCode} ✅
              </Box>
            ) : data.maxJdSalary ? (
              <Box>
                Maximum Salary: {data.maxJdSalary}k {data.salaryCurrencyCode} ✅
              </Box>
            ) : null}
          </Box>
        ) : null}

        <Box sx={{ marginTop: "1rem", position: "relative" }}>
          <Box sx={{ typography: "body2" }}>About Company</Box>

          <Box
            sx={{
              marginTop: "1rem",
              typography: "subtitle2",
              maxHeight: "17rem",
              overflow: "hidden",
              color: "custom.grey_1",

              ...(mode === "default" && {
                maskImage:
                  "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0));",
              }),
            }}
          >
            {data.jobDetailsFromCompany}
          </Box>

          {mode === "default" && (
            <Box
              sx={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                typography: "subtitle1",
                cursor: "pointer",
                color: "#4943da",
              }}
              onClick={() => handleViewJob({ data })}
            >
              View Job
            </Box>
          )}
        </Box>
      </Box>

      {typeof data.minExp === "number" && (
        <Box>
          <Box sx={{ typography: "subtitle2", color: "custom.grey_2" }}>
            Minimum Experience
          </Box>
          <Box sx={{ typography: "subtitle1" }}>
            {data.minExp} {data.minExp === 1 ? "year" : "years"}
          </Box>
        </Box>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button
          sx={{
            width: "100%",
            borderRadius: ".75rem",
            color: "black",
            textTransform: "none",
            padding: ".8rem 1.8rem",
            backgroundColor: "rgb(85, 239, 196)",
            "&:hover": { backgroundColor: "rgb(85, 239, 196)" },
          }}
          variant="contained"
        >
          ⚡ Easy Apply
        </Button>

        <Button
          sx={{
            width: "100%",
            borderRadius: ".75rem",
            color: "white",
            textTransform: "none",
            padding: ".8rem 1.8rem",
            backgroundColor: "#4943da",
            "&:hover": { backgroundColor: "#4943da" },
          }}
          variant="contained"
        >
          <Box sx={{ display: "flex", gap: ".5rem", marginRight: "1rem" }}>
            <Box
              sx={{
                ...getHeightWidth("sm"),
                bgcolor: "custom.grey_3",
                borderRadius: "50%",
                overflow: "hidden",
                filter: "blur(3px)",
              }}
            >
              {FaceImage1 ? (
                <Box
                  component="img"
                  src={FaceImage1}
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              ) : null}
            </Box>
            <Box
              sx={{
                ...getHeightWidth("sm"),
                bgcolor: "custom.grey_3",
                borderRadius: "50%",
                overflow: "hidden",
                filter: "blur(3px)",
              }}
            >
              {FaceImage2 ? (
                <Box
                  component="img"
                  src={FaceImage2}
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              ) : null}
            </Box>
          </Box>
          Unlock referral asks
        </Button>
      </Box>
    </Box>
  );
}

export default JobListingCard;
