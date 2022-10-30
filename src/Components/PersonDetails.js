import React from "react";
import { styled, Grid, Paper, Box } from "@mui/material";
const PersonDetails = ({ persons }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
 
      <Box sx={{ width: "100%" }}>
        {persons.map((person, i) => (
          <>
            <Grid container rowSpacing={1} key={i}>
              <Grid item xs={3}>
                <Item>
                  <h4>Name:{person.name}</h4>
                </Item>
              </Grid>
            </Grid>
            <Grid container rowSpacing={1} key={i}>
              <Grid item xs={3}>
                <Item>
                  <h4>Height:{person.height}</h4>
                </Item>
              </Grid>
            </Grid>
          </>
        ))}
      </Box>
 
  );
};

export default PersonDetails;
