import { Badge, Box, Grid, Typography } from "@mui/material";
import React from "react";
import AppSelect from "./Common/Select";
import {
  ExperineceOptions,
  FILTER_TYPES,
  RemoteOptions,
  SalaryRange,
  TechStackOptions,
  numberOfEmployees,
  roleOptions,
} from "../Util/constants";

function Filter({ jobCount }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Badge badgeContent={jobCount} color="primary" max={999}>
          <Typography
            variant="h6"
            sx={{
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                height: "4px",
                width: "100%",
                backgroundColor: "#000",
                borderRadius: "2px",
              },
            }}
          >
            Search Jobs
          </Typography>
        </Badge>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <AppSelect
              label={"Roles"}
              options={roleOptions}
              multiple={true}
              isCategory={true}
              filterType={FILTER_TYPES.roles}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AppSelect
              label={"No Of Employees"}
              options={numberOfEmployees}
              multiple={true}
              filterType={FILTER_TYPES.employeeSize}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AppSelect
              label={"Experience"}
              options={ExperineceOptions}
              multiple={false}
              filterType={FILTER_TYPES.experience}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AppSelect
              label={"Work Mode"}
              options={RemoteOptions}
              multiple={true}
              filterType={FILTER_TYPES.workMode}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AppSelect
              label={"Tech Stack"}
              options={TechStackOptions}
              multiple={true}
              filterType={FILTER_TYPES.techStack}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AppSelect
              label={"Min Base Pay"}
              options={SalaryRange}
              multiple={false}
              filterType={FILTER_TYPES.minBasePay}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Filter;
