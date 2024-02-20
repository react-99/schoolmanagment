import { GetApp, Group, Sell } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Grid flexWrap={"wrap"} container spacing={3}>
        <Grid
          lg={3.9}
          md={5.8}
          xs={12}
          boxShadow={2}
          sx={{
            backgroundColor: "lightblue.main",
            color: "white",
            p: 2,
            borderRadius: 4,
            margin: "5px",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: 12,
            },
          }}
        >
          <Group sx={{ fontSize: "50px" }} />
          <Typography variant="h6" component="h3">
            User's
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ducimus, recusandae cumque ut exercitationem esse tenetur voluptates
            corrupti blanditiis earum!
          </Typography>
        </Grid>
        <Grid
          lg={3.9}
          md={5.8}
          xs={12}
          boxShadow={2}
          sx={{
            backgroundColor: "lightpink.main",
            color: "white",
            p: 2,
            borderRadius: 4,
            margin: "5px",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: 12,
            },
          }}
        >
          <GetApp sx={{ fontSize: "50px" }} />
          <Typography variant="h6" component="h3">
            Download
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ducimus, recusandae cumque ut exercitationem esse tenetur voluptates
            corrupti blanditiis earum!
          </Typography>
        </Grid>
        <Grid
          lg={3.9}
          md={5.8}
          xs={12}
          boxShadow={2}
          sx={{
            backgroundColor: "lightorange.main",
            color: "white",
            p: 2,
            borderRadius: 4,
            margin: "5px",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: 12,
            },
          }}
        >
          <Sell sx={{ fontSize: "50px" }} />
          <Typography variant="h6" component="h3">
            Sell
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ducimus, recusandae cumque ut exercitationem esse tenetur voluptates
            corrupti blanditiis earum!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
