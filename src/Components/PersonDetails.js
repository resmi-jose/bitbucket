import React, { useEffect, useState } from "react";
import { styled, Grid, Paper, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
const PersonDetails = () => {
  const { state } = useLocation();
  const [personObject, setPersonObject] = useState([]);
  useEffect(() => {
    if (state) {
      let personObject = state.data;
      setPersonObject(personObject);
    }
  },[state]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      {personObject.map((person, index) => (
        <Box sx={{ width: "100%" }} key={index}>
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <Item>
                <h4>Name:{person.name}</h4>
              </Item>
            </Grid>
            </Grid>
            <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <Item>
                <h4>Height:{person.height}</h4>
              </Item>
            </Grid>
            </Grid>
        </Box>
      ))}
   </React.Fragment>
  );
};

export default PersonDetails;
