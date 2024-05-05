import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckIcon from "@mui/icons-material/Check";

function Jobs({ jobList = [], loading = false }) {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
    filter: "blur(2px)",
  }));

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        {jobList.map((job, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={5}>
              <CardHeader
                avatar={
                  <Avatar
                    src={job?.logoUrl}
                    aria-label="logo"
                    alt={job?.companyName?.charAt(0).toUpperCase()}
                  />
                }
                title={job?.companyName}
                subheader={
                  <>
                    <Typography variant="body2">
                      {job?.jobRole.charAt(0).toUpperCase() +
                        job?.jobRole.substring(1)}
                    </Typography>
                    <Typography variant="body2">
                      {job?.location.charAt(0).toUpperCase() +
                        job?.location.substring(1)}
                    </Typography>
                  </>
                }
              />
              <CardContent>
                <Box
                  sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
                >
                  <Typography>
                    Estimated Salary: ${job?.minJdSalary || 0} -{" "}
                    {job?.maxJdSalary || 0} LPA
                  </Typography>
                  <Box
                    sx={{
                      height: "20px",
                      width: "20px",
                      background: "green",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CheckIcon fontSize={"10"} htmlColor="#96E7BF" />
                  </Box>
                </Box>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  About Company:
                </Typography>
                <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
                  About Us:
                </Typography>
                <Box>
                  <Typography variant="body2">
                    {job?.jobDetailsFromCompany}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    width: "100%",
                  }}
                >
                  <Button
                    sx={{
                      "&:hover": {
                        background: "inherit",
                      },
                    }}
                  >
                    View job
                  </Button>
                  <Box>
                    <Typography variant="subtitle1">
                      Minimum Experience
                    </Typography>
                    <Typography variant="subtitle2">
                      {job?.minExp || 0} years
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#54EFC4",
                      "&:hover": {
                        background: "#54EFC4",
                      },
                      color: "black",
                    }}
                    startIcon={<BoltIcon sx={{ color: "yellow" }} />}
                  >
                    Easy Apply
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#4943DA",
                      "&:hover": {
                        background: "#4943DA",
                      },
                    }}
                    fullWidth
                    startIcon={
                      <>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <SmallAvatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                          />
                        </StyledBadge>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <SmallAvatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                          />
                        </StyledBadge>
                      </>
                    }
                  >
                    Unlock referral asks
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : null}

      {jobList.length == 0 && !loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <Typography variant="h5" textAlign={"center"}>
            No Jobs available for this category at the moment
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
}

export default Jobs;
